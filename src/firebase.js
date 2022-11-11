// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBf8byGTPHZFBVJ351tXNv0r35tRimwcyg",
    authDomain: "twitter-51c78.firebaseapp.com",
    projectId: "twitter-51c78",
    storageBucket: "twitter-51c78.appspot.com",
    messagingSenderId: "976042015306",
    appId: "1:976042015306:web:c5b6c76520a8393cf8c4b3",
    measurementId: "G-WMRSTJC6LS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;

