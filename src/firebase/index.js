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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (err) {
        console.log("error creating user", err.message);
      }
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
