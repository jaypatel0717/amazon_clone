import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7OIXiN8PzfiDGl5czaiLbgx0KDlToFPo",
    authDomain: "clone-c98d3.firebaseapp.com",
    databaseURL: "https://clone-c98d3.firebaseio.com",
    projectId: "clone-c98d3",
    storageBucket: "clone-c98d3.appspot.com",
    messagingSenderId: "924635122026",
    appId: "1:924635122026:web:b06eb58cd3a055d7eb3d13",
    measurementId: "G-83SGBLRWCH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };