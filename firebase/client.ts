// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAbvSlOOfOJi43W8z1BKaQq7zwNck0mLIk",
  authDomain: "intprep-ce801.firebaseapp.com",
  projectId: "intprep-ce801",
  storageBucket: "intprep-ce801.firebasestorage.app",
  messagingSenderId: "575895442492",
  appId: "1:575895442492:web:61f46651fde8259d919f39",
  measurementId: "G-PKG26NFCTN"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);