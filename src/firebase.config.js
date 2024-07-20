// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrsjETD-SAb5vowdH1xl_rz6QcpgTkOrs",
  authDomain: "house-search-47e56.firebaseapp.com",
  projectId: "house-search-47e56",
  storageBucket: "house-search-47e56.appspot.com",
  messagingSenderId: "670129883613",
  appId: "1:670129883613:web:fbff2ad6f42dd8358b0e34",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
