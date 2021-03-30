// eslint-disable-next-line no-unused-vars
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
  
  // paste firebase config code from Firebase
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
