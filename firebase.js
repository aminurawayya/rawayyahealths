import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "PASTE_YOURS",
    authDomain: "rawayya-health.firebaseapp.com",
    projectId: "rawayya-health",
    storageBucket: "rawayya-health.appspot.com",
    messagingSenderId: "PASTE_YOURS",
    appId: "PASTE_YOURS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);