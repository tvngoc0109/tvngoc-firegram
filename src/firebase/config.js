import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDIzbkapYVut09rCGzVqC-houoGDHU5qPc",
    authDomain: "tvngoc-firegram.firebaseapp.com",
    projectId: "tvngoc-firegram",
    storageBucket: "tvngoc-firegram.appspot.com",
    messagingSenderId: "151197596485",
    appId: "1:151197596485:web:f833eb23e03827f43b9c2c"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };