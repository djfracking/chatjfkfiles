const functions = require('firebase-functions/v2');
const admin = require('firebase-admin');

// Initialize Firebase Admin
admin.initializeApp();

// Import your function modules
const trendingCron = require('./src/voting/trendingCron');

// Export your functions
exports.trendingCron = trendingCron;
