// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBCbOf7q07ztFwaYNGKlHtGYbl24rJaed8",
  authDomain: "clone-53a70.firebaseapp.com",
  projectId: "clone-53a70",
  storageBucket: "clone-53a70.appspot.com",
  messagingSenderId: "465545195166",
  appId: "1:465545195166:web:13bcd52e4afdbd444a958f",
  measurementId: "G-5ZYWJKP542"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };
