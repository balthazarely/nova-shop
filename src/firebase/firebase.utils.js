import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCLUQJvp5zUjd00ySIMRQ2-ZLBREAQtAg",
  authDomain: "nove-ecommerce-db.firebaseapp.com",
  projectId: "nove-ecommerce-db",
  storageBucket: "nove-ecommerce-db.appspot.com",
  messagingSenderId: "815844685680",
  appId: "1:815844685680:web:edd2ff1b54c25d19e281b5",
  measurementId: "G-KYC0737D8H",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  const { email, displayName } = userAuth;
  if (!snapShot.exists) {
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else if (!snapShot.data().displayName) {
    await userRef.update({
      displayName,
    });
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
