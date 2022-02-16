import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API,
  authDomain: process.env.NEXT_PUBLIC_AUTH,
  projectId: "time-collection-app",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: "484136309667",
  appId: "1:484136309667:web:a372abfbeacbaa8fa40016",
  measurementId: "G-51FXCCH62J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
