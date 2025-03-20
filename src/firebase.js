// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// If you plan to use additional Firebase services, import them here
// e.g., import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR6SfFCMPvXgA1KsGqyFPIWsGU1xw0vMA",
  authDomain: "chatjfkfiles.firebaseapp.com",
  projectId: "chatjfkfiles",
  storageBucket: "chatjfkfiles.firebasestorage.app",
  messagingSenderId: "112030570418",
  appId: "1:112030570418:web:26ea39a8380052a17536ab",
  measurementId: "G-M4XSR0LF3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase app (and any services you initialize) so you can use them in your components
export { app, analytics };
// If you add additional services, export them as well
