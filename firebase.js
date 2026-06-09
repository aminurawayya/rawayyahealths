// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your Firebase config (paste from your dashboard)
const firebaseConfig = {
    apiKey: "PASTE_YOURS",
    authDomain: "rawayya-health.firebaseapp.com",
    projectId: "rawayya-health",
    storageBucket: "rawayya-health.appspot.com",
    messagingSenderId: "PASTE_YOURS",
    appId: "PASTE_YOURS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect Firestore (database)
export const db = getFirestore(app);