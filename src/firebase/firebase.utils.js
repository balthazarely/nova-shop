import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCLUQJvp5zUjd00ySIMRQ2-ZLBREAQtAg",
  authDomain: "nove-ecommerce-db.firebaseapp.com",
  projectId: "nove-ecommerce-db",
  storageBucket: "nove-ecommerce-db.appspot.com",
  messagingSenderId: "815844685680",
  appId: "1:815844685680:web:edd2ff1b54c25d19e281b5",
  measurementId: "G-KYC0737D8H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
