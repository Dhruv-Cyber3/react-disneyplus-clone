// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN6LF1rdsJrRTMsQaVVgQbOi3CuXbgOlo",
  authDomain: "disney-clone-react-103c5.firebaseapp.com",
  projectId: "disney-clone-react-103c5",
  storageBucket: "disney-clone-react-103c5.appspot.com",
  messagingSenderId: "771182203077",
  appId: "1:771182203077:web:b473d6a535f7a6b0fd20ac",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage, signInWithPopup };
export default db;
