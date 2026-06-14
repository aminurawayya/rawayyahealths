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

window.publishPost = async () => {

 const title =
 document.getElementById("title").value;

 const content =
 document.getElementById("content").value;

 const file =
 document.getElementById("image").files[0];

 const imageRef =
 ref(storage, "posts/" + file.name);

 await uploadBytes(imageRef, file);

 const imageUrl =
 await getDownloadURL(imageRef);

 await addDoc(
 collection(db, "posts"),
 {
   title,
   content,
   imageUrl,
   createdAt: Date.now()
 });

 alert("Post Published");
};