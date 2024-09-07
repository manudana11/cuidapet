// src/services/firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyCxoGOytDNN1uniUSShVMca6Glv8HwBgRQ",
    authDomain: "cuidapet-2bd0e.firebaseapp.com",
    projectId: "cuidapet-2bd0e",
    storageBucket: "cuidapet-2bd0e.appspot.com",
    messagingSenderId: "114659404370",
    appId: "1:114659404370:web:9d05901c22b7d70f81cd8b",
    measurementId: "G-ZX2P36TQY1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const messaging = firebase.messaging();

export { db, auth, messaging };
