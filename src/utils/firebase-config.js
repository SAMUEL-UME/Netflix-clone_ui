import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-m7v6t5jSkhWqBJRJVFu2ugzSZWsIu4c",
  authDomain: "react-netflix-clone-dde80.firebaseapp.com",
  projectId: "react-netflix-clone-dde80",
  storageBucket: "react-netflix-clone-dde80.appspot.com",
  messagingSenderId: "765520509301",
  appId: "1:765520509301:web:7b147545177d36c185fb3c",
  measurementId: "G-QVHM5HZFC9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
  