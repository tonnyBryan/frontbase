// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuration de Firebase (remplace par les valeurs de ton projet Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyBuU-y6Yjqq9-_UyMhMPLvcylHah07AOdo",
  authDomain: "fireproject-fff3b.firebaseapp.com",
  projectId: "fireproject-fff3b",
  storageBucket: "fireproject-fff3b.firebasestorage.app",
  messagingSenderId: "1047048938780",
  appId: "1:1047048938780:web:e79191b393757c4b1ec6d9"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
