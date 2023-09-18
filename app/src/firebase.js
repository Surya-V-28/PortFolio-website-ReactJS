

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need



// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
       
 apiKey: "AIzaSyB7Mx28hDH-FsZk3SBFTyU2d49bZTd16xQ",
 authDomain: "protfolio-surya.firebaseapp.com",
 projectId: "protfolio-surya",
 storageBucket: "protfolio-surya.appspot.com",
 messagingSenderId: "992809782797",
 appId: "1:992809782797:web:8472b6fa88a00e757c4f44",
 measurementId: "G-PR7458YDEH"

 
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
// const app = firebaseApp.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
