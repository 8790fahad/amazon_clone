import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-4u4ya3CVluYeW5CrZh0G-jg8RMrKYRM",
    authDomain: "challenge-8572d.firebaseapp.com",
    databaseURL: "https://challenge-8572d.firebaseio.com",
    projectId: "challenge-8572d",
    storageBucket: "challenge-8572d.appspot.com",
    messagingSenderId: "982194492472",
    appId: "1:982194492472:web:120e116a35b4b7800182cd",
    measurementId: "G-WS2ZKCPRQY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };