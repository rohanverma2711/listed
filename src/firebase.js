// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5YjBprT-cUZgZ80PIwO2lQ5tXuY-sePQ",
  authDomain: "listedlogin-3ca36.firebaseapp.com",
  projectId: "listedlogin-3ca36",
  storageBucket: "listedlogin-3ca36.appspot.com",
  messagingSenderId: "525013047106",
  appId: "1:525013047106:web:e616b8bd521c41701d9adb",
  measurementId: "G-YXT9J41R9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
