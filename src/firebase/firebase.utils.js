import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCBaLuo0o71brgNScH7PyfTQQztFloO8g8",
    authDomain: "crwn-db-c50e8.firebaseapp.com",
    databaseURL: "https://crwn-db-c50e8.firebaseio.com",
    projectId: "crwn-db-c50e8",
    storageBucket: "crwn-db-c50e8.appspot.com",
    messagingSenderId: "288924645404",
    appId: "1:288924645404:web:5b34606d7eac199b1387d9",
    measurementId: "G-61CVW6Q1DX"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;