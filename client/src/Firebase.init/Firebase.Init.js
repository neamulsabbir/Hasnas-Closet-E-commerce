// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuFnmbRBODth2WqCIX5SYYCVYPw",
  authDomain: "e-com3154.firebaseapp.com",
  projectId: "e-commerce-54",
  storageBucket: "e-commerce-b3154.appspot.com",
  messagingSenderId: "8885890605",
  appId: "1:888582490605:web:ed6081ef420121c46a3fe4",
  measurementId: "G-00PN25ZLMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app