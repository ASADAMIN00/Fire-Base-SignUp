// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDSPBC4_8ddcPPivn_s2-_sNgfOrESM5I",
  authDomain: "fir-1-7820b.firebaseapp.com",
  projectId: "fir-1-7820b",
  storageBucket: "fir-1-7820b.firebasestorage.app",
  messagingSenderId: "914977588627",
  appId: "1:914977588627:web:043ca0a691944df948d466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;