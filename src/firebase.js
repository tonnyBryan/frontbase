// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBuU-y6Yjqq9-_UyMhMPLvcylHah07AOdo",
  authDomain: "fireproject-fff3b.firebaseapp.com",
  projectId: "fireproject-fff3b",
  storageBucket: "fireproject-fff3b.firebasestorage.app",
  messagingSenderId: "1047048938780",
  appId: "1:1047048938780:web:e79191b393757c4b1ec6d9",
  databaseURL: "https://fireproject-fff3b-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services Firebase
const database = getDatabase(app); // Realtime Database
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore


// Exporter les services Firebase
export { auth, database, db };
