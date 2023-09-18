

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need



// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
       

 
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
// const app = firebaseApp.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
