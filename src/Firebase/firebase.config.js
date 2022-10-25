// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvEie-aaipFvxjA-i6ZEPP9T-kxdVEZm0",
    authDomain: "code-adaptive.firebaseapp.com",
    projectId: "code-adaptive",
    storageBucket: "code-adaptive.appspot.com",
    messagingSenderId: "26298912139",
    appId: "1:26298912139:web:8debdea1b9761b46eef38e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;