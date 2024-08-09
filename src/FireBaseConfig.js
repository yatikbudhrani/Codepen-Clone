import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7FBYjZpN_QztKXDbXkS7c68beULmc0Ro",
  authDomain: "fir-auth-be1cc.firebaseapp.com",
  projectId: "fir-auth-be1cc",
  storageBucket: "fir-auth-be1cc.appspot.com",
  messagingSenderId: "610100406075",
  appId: "1:610100406075:web:b1bfd35a585617d1c4b91e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
