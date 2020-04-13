import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAHEE-vcPkHNj-d3MqakFNBeei_KVRm3KQ",
  authDomain: "turing-chess-235418.firebaseapp.com",
  databaseURL: "https://turing-chess-235418.firebaseio.com",
  projectId: "turing-chess-235418",
  storageBucket: "turing-chess-235418.appspot.com",
  messagingSenderId: "613694004155",
  appId: "1:613694004155:web:2696cf792a55338909029e",
  measurementId: "G-7V90BLS12W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
