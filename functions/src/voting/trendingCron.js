const { onSchedule } = require('firebase-functions/v2/scheduler');
const admin = require('firebase-admin');

const realtimeDb = admin.database();

const trendingCron = onSchedule("every 15 minutes", async (event) => {
  try {
    const snapshot = await realtimeDb.ref("trumpDocs").once("value");
    const docs = snapshot.val();

    if (!docs) {
      console.log("No documents found in trumpDocs.");
      return;
    }

    // Sort by upvotes descending
    const sorted = Object.entries(docs)
      .map(([id, value]) => ({ id, ...value }))
      .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
      .slice(0, 100); // Top 100 docs

    // Store top 100 in /trending
    await realtimeDb.ref("trending").set(sorted);

    console.log("✅ Trending documents updated.");
  } catch (error) {
    console.error("🔥 Error updating trending docs:", error);
  }
});

module.exports = trendingCron;
