// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-LdrS1hPAuE40R6v-CW17mTORZd0LwQ",
  authDomain: "first-firebase-project-e0a98.firebaseapp.com",
  projectId: "first-firebase-project-e0a98",
  storageBucket: "first-firebase-project-e0a98.appspot.com",
  messagingSenderId: "866438978770",
  appId: "1:866438978770:web:c0cd2659920dbc172be10b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);