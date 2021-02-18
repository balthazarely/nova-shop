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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
