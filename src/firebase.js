// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEKBqN8QnQRFpGA8o8pO1W_jPe1OYU8u4",
  authDomain: "kkoal-chat-app.firebaseapp.com",
  projectId: "kkoal-chat-app",
  storageBucket: "kkoal-chat-app.appspot.com",
  messagingSenderId: "630314585611",
  appId: "1:630314585611:web:111c95ffd21c1afc47c10e",
  measurementId: "G-7YMWJYKM0V",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
