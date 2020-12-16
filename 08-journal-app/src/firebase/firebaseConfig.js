import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDlyT1URiKeVQPjzT1NxcGof9KkaloKMCY",
    authDomain: "react-app-curso-3b1fc.firebaseapp.com",
    databaseURL: "https://react-app-curso-3b1fc.firebaseio.com",
    projectId: "react-app-curso-3b1fc",
    storageBucket: "react-app-curso-3b1fc.appspot.com",
    messagingSenderId: "1039346324913",
    appId: "1:1039346324913:web:b5a25efbf31df42f18d990"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, googleAuthProvider, firebase
}