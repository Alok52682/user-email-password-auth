// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb6Wu9gj5S9s0cc5JECEQEnFRcysbi-4s",
    authDomain: "user-email-password-auth-b9ad3.firebaseapp.com",
    projectId: "user-email-password-auth-b9ad3",
    storageBucket: "user-email-password-auth-b9ad3.appspot.com",
    messagingSenderId: "299663393159",
    appId: "1:299663393159:web:88eaeadb507cc164901322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;