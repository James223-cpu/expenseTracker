import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHi2h2NjFTk2YXGT-HoVXbQfcOenLTH0I",
  authDomain: "expensetracker-85acf.firebaseapp.com",
  projectId: "expensetracker-85acf",
  storageBucket: "expensetracker-85acf.appspot.com",
  messagingSenderId: "340404261130",
  appId: "1:340404261130:web:c4b1973f0b8cf05a52eaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;