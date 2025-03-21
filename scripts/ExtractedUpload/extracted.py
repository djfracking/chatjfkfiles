import os
import json
import datetime
import firebase_admin
from firebase_admin import credentials, storage, firestore
from google.cloud.exceptions import NotFound

# Path to your service account key and test directory
SERVICE_ACCOUNT_PATH = "/home/popularis/Desktop/chatjfkfiles.json"
TEST_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../test'))
LOG_FILE = os.path.join(TEST_DIR, 'processing_log.json')

# Initialize Firebase Admin
cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
firebase_admin.initialize_app(cred, {
    'storageBucket': 'chatjfkfiles.firebasestorage.app'
})

db = firestore.client()
bucket = storage.bucket()

# Check if bucket exists
def bucket_exists(bucket):
    try:
        bucket.reload()
        print("✅ Bucket exists.")
        return True
    except NotFound:
        print("❌ Bucket does not exist or no permissions.")
        return False

def process_pdf(pdf_key: str, page_count: int, processing_date: str):
    normalized_key = pdf_key.replace('\\', '/')
    pdf_path = os.path.join(TEST_DIR, normalized_key)

    if not os.path.exists(pdf_path):
        print(f"❗ PDF not found: {pdf_path}")
        return

    # Upload PDF to Firebase Storage
    blob = bucket.blob(normalized_key)
    blob.upload_from_filename(pdf_path)
    print(f"✅ Uploaded PDF: {normalized_key}")

    # Generate a signed URL (valid ~500 years)
    expires = datetime.timedelta(days=365 * 500)
    signed_url = blob.generate_signed_url(expiration=expires)

    pdf_basename = os.path.splitext(os.path.basename(normalized_key))[0]
    pdf_dir = os.path.dirname(pdf_path)

    pages = []
    for page_num in range(1, page_count + 1):
        text_file = os.path.join(pdf_dir, f"{pdf_basename}_page{page_num}.txt")
        if os.path.exists(text_file):
            with open(text_file, 'r', encoding='utf-8') as f:
                pages.append({
                    'pageNumber': page_num,
                    'text': f.read()
                })
        else:
            print(f"⚠️ Missing page text file: {text_file}")

    # Prepare Firestore data
    doc_data = {
        'pdfFileName': normalized_key,
        'processingDate': processing_date,
        'pdfUrl': signed_url,
        'pages': pages
    }

    # Write to Firestore
    doc_ref = db.collection('pdfs').document(pdf_basename)
    doc_ref.set(doc_data)
    print(f"✅ Firestore document created: {pdf_basename}")

def main():
    if not os.path.exists(LOG_FILE):
        print(f"❌ processing_log.json not found at {LOG_FILE}")
        return

    if not bucket_exists(bucket):
        print("❌ Exiting script due to bucket issue.")
        return

    with open(LOG_FILE, 'r', encoding='utf-8') as f:
        log_data = json.load(f)

    processing_date = log_data.get('date')
    pdf_map = log_data.get('pdfs', {})

    for pdf_key, page_count in pdf_map.items():
        try:
            process_pdf(pdf_key, page_count, processing_date)
        except Exception as e:
            print(f"❌ Error processing {pdf_key}: {e}")

    print("🎉 Processing complete")

if __name__ == '__main__':
    main()
