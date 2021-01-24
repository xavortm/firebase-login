import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const auth = firebase.auth();
export const firestore = firebase.firestore();
