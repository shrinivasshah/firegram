import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDGrXrrbUOO5xzYXJXB0QvlKtZEQ9iYimc",
    authDomain: "firegram-555cf.firebaseapp.com",
    databaseURL: "https://firegram-555cf.firebaseio.com",
    projectId: "firegram-555cf",
    storageBucket: "firegram-555cf.appspot.com",
    messagingSenderId: "775854143393",
    appId: "1:775854143393:web:7ea6eab82ee13dd392bde0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage, projectFirestore, timestamp}
