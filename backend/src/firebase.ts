import admin from "firebase-admin";
import path from "path";

// Load service account (only in local dev). In production, use env var GOOGLE_APPLICATION_CREDENTIALS.
const serviceAccountPath = path.resolve(__dirname, "serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath)),
  });
}

export const db = admin.firestore();
export default admin;
