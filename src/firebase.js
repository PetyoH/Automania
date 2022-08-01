// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzUcF1mB7LFBTF9x7mmfGm7Tvru_pq6vg",
  authDomain: "automania-2022.firebaseapp.com",
  projectId: "automania-2022",
  storageBucket: "automania-2022.appspot.com",
  messagingSenderId: "878876161037",
  appId: "1:878876161037:web:370dc1a48a7c0a37409144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();