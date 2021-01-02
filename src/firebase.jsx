import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXCpc5X7LVLKddkqmPRn-eK68eH-FbzS4",
  authDomain: "dev-board-62adf.firebaseapp.com",
  projectId: "dev-board-62adf",
  storageBucket: "dev-board-62adf.appspot.com",
  messagingSenderId: "345010970372",
  appId: "1:345010970372:web:7e2c083e4dbf2407baba51",
  measurementId: "G-JZ5ND28EJX",
};

//Setupping firebase app with the config
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
