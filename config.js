import * as firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyD-xgMrom-F_X6otVOT9WBzDcic8_k1b1Q",
    authDomain: "booksanta-72c67.firebaseapp.com",
    projectId: "booksanta-72c67",
    storageBucket: "booksanta-72c67.appspot.com",
    messagingSenderId: "160318096694",
    appId: "1:160318096694:web:97775cccc620f356ee1f97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();