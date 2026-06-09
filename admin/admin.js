import { db } from "../firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.getElementById("postBtn").addEventListener("click", async () => {
    await addDoc(collection(db, "posts"), {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        date: new Date().toISOString()
    });

    alert("Post published successfully!");
});