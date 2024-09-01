// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI71bdVWUG0ehYAw5Hmy-0rcAuStyqB0U",
  authDomain: "react-contact-b4a58.firebaseapp.com",
  projectId: "react-contact-b4a58",
  storageBucket: "react-contact-b4a58.appspot.com",
  messagingSenderId: "577505361943",
  appId: "1:577505361943:web:f8990ca05215a63583dc52",
  measurementId: "G-M2MG35BLWX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);