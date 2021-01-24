import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBEnfAwqHzeS6QHj-rDWGdMmLny1Bd5ak",
  authDomain: "learning-firebase-login.firebaseapp.com",
  projectId: "learning-firebase-login",
  storageBucket: "learning-firebase-login.appspot.com",
  messagingSenderId: "298353539768",
  appId: "1:298353539768:web:ce8539bd4b348a4480124d",
  measurementId: "G-ZK8RPCL82W",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
