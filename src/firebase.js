// eslint-disable-next-line no-unused-vars
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQVRCq5hglL7TOZV7OPtJvlu5Gjce09Yc",
  authDomain: "messaging-app-5b75d.firebaseapp.com",
  databaseURL: "https://messaging-app-5b75d-default-rtdb.firebaseio.com",
  projectId: "messaging-app-5b75d",
  storageBucket: "messaging-app-5b75d.appspot.com",
  messagingSenderId: "423685813986",
  appId: "1:423685813986:web:15d5a0534fa895c44150bb",
  measurementId: "G-FJKV7STT6K"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp
(firebaseConfig);//initializing app with firebase
//vriable db - database (to get our database)
const db = firebase.firestore();
const auth =firebase.auth();
const provider = new firebase.auth
.GoogleAuthProvider();

//eporting the auth and provider Explicitily
export  { auth, provider};
//default
export default db;