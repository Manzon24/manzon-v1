
// firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore for database


const firebaseConfig = {
  // Your Firebase Config
  apiKey: "AIzaSyBSpgraQSQUU_b_qEagU5jB4ScLbGNC7wY",
  authDomain: "manzon-96f41.firebaseapp.com",
  projectId: "manzon-96f41",
  storageBucket: "manzon-96f41.appspot.com",
  messagingSenderId: "382255858186",
  appId: "1:382255858186:web:90f3850229625c762095f3",
  measurementId: "G-DWS7Z3DJP8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

