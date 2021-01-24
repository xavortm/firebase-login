import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
