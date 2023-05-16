import 'firebase/auth'
import 'firebase/database'
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Axios from 'axios'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRqPgYB7dC5EGtMKZDfmW7LTifi182tYI",
    authDomain: "daotea-5edb1.firebaseapp.com",
    projectId: "daotea-5edb1",
    storageBucket: "daotea-5edb1.appspot.com",
    messagingSenderId: "556256033946",
    appId: "1:556256033946:web:2b6b0fa5a1a32e913bf323",
    measurementId: "G-JQGN476XW7"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { Axios, db, app, analytics }