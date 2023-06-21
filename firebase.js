// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCKUM4WrwmzWYUy1x1wYuR-DbY6SMFpfUc",
  authDomain: "chatter-8c56b.firebaseapp.com",
  projectId: "chatter-8c56b",
  storageBucket: "chatter-8c56b.appspot.com",
  messagingSenderId: "816476001344",
  appId: "1:816476001344:web:8763c4e4ccaf01efec3ba5",
  measurementId: "G-QR5SS2F7M8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };
