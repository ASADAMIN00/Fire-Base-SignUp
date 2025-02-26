// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8NFuPkJmM5XHLerrMH5oQcpQOfyJZzfE",
  authDomain: "myauthapp01.firebaseapp.com",
  projectId: "myauthapp01",
  storageBucket: "myauthapp01.firebasestorage.app",
  messagingSenderId: "72802822633",
  appId: "1:72802822633:web:e5218c620418ad37650378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;