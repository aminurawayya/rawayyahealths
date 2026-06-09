import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const postsDiv = document.getElementById("posts");

async function loadPosts() {
    const snapshot = await getDocs(collection(db, "posts"));

    snapshot.forEach((doc) => {
        const data = doc.data();

        postsDiv.innerHTML += `
      <div class="post">
        <h2>${data.title}</h2>
        <p>${data.content}</p>
      </div>
    `;
    });
}

loadPosts();