import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAdbVmNz6EeiYE0NdSrsnAm0RlOo0_i1l4",
    authDomain: "ratebeerapp-f2c60.firebaseapp.com",
    databaseURL: "https://ratebeerapp-f2c60.firebaseio.com",
    projectId: "ratebeerapp-f2c60",
    storageBucket: "ratebeerapp-f2c60.appspot.com",
    messagingSenderId: "885593643946",
    appId: "1:885593643946:web:43a17231a4606bf4a1a9d3",
    measurementId: "G-73PRE4MPQB"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;