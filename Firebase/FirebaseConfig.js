import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBgv3_lMlzljlUk-khemKw_-yKcLG6GWDg",
  authDomain: "oreby-frontend.firebaseapp.com",
  projectId: "oreby-frontend",
  storageBucket: "oreby-frontend.appspot.com",
  messagingSenderId: "780781252299",
  appId: "1:780781252299:web:fc9596745735940df9754e",
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(Firebaseapp);
export default Firebaseapp;
