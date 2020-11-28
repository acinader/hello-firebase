import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";


// This is not secret info
const firebaseConfig = {
  apiKey: "AIzaSyADwT5gu8GWglr_4mHtAzfaKsB4xXXJbxg",
  authDomain: "hello-world-78c22.firebaseapp.com",
  databaseURL: "https://hello-world-78c22.firebaseio.com",
  projectId: "hello-world-78c22",
  storageBucket: "hello-world-78c22.appspot.com",
  messagingSenderId: "114522434392",
  appId: "1:114522434392:web:20d301c3ee4467f5e6d32d",
  measurementId: "G-B4GHCRVW64"
};

firebase.initializeApp(firebaseConfig, 'helloFirebase');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
