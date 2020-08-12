import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBQsfv3K34R3tUaE1N9ZPbD7nriYFg3W8s",
    authDomain: "clothing-db-94cda.firebaseapp.com",
    databaseURL: "https://clothing-db-94cda.firebaseio.com",
    projectId: "clothing-db-94cda",
    storageBucket: "clothing-db-94cda.appspot.com",
    messagingSenderId: "572321117137",
    appId: "1:572321117137:web:0e1e4368065c12cbf726f0",
    measurementId: "G-93RT0WVFQ8"
};

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
