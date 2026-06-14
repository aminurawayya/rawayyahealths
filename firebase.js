// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

// Your Firebase config
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

// Firestore Database
export const db = getFirestore(app);

// Firebase Storage
export const storage = getStorage(app);