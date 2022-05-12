// Import the functions you need from the SDKs you need
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ8tCbIQFdK3NgZF-ylFkU9iP2QAZRGaQ",
  authDomain: "nsbm-mobile-app.firebaseapp.com",
  projectId: "nsbm-mobile-app",
  storageBucket: "nsbm-mobile-app.appspot.com",
  messagingSenderId: "510413280840",
  appId: "1:510413280840:web:d10bf0599cd1c1959c2a7d"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

export default firebase;