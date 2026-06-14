import { db, storage } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-storage.js";

const postBtn = document.getElementById("postBtn");

postBtn.addEventListener("click", async () => {

    try {

        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
        const imageInput = document.getElementById("image");

        if (!title || !content) {
            alert("Please enter title and content.");
            return;
        }

        if (!imageInput.files.length) {
            alert("Please select an image.");
            return;
        }

        const file = imageInput.files[0];

        const imageRef = ref(
            storage,
            `posts/${Date.now()}_${file.name}`
        );

        await uploadBytes(imageRef, file);

        const imageUrl = await getDownloadURL(imageRef);

        await addDoc(collection(db, "posts"), {
            title: title,
            content: content,
            imageUrl: imageUrl,
            createdAt: Date.now()
        });

        alert("Post Published Successfully!");

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("image").value = "";

    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }

});