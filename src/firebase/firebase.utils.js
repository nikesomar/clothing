import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
{
    apiKey: "AIzaSyBQsfv3K34R3tUaE1N9ZPbD7nriYFg3W8s",
    authDomain: "clothing-db-94cda.firebaseapp.com",
    databaseURL: "https://clothing-db-94cda.firebaseio.com",
    projectId: "clothing-db-94cda",
    storageBucket: "clothing-db-94cda.appspot.com",
    messagingSenderId: "572321117137",
    appId: "1:572321117137:web:0e1e4368065c12cbf726f0",
    measurementId: "G-93RT0WVFQ8"
  }

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;