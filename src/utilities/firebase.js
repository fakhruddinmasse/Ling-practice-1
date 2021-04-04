import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBoU4eJbl1HQ8Oy2l5FCRHqCbLjVN2CVXY",
    authDomain: "ling-vue.firebaseapp.com",
    projectId: "ling-vue",
    storageBucket: "ling-vue.appspot.com",
    messagingSenderId: "19941300736",
    appId: "1:19941300736:web:917d34f4bf3266a02416e5"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatRef = db.ref("chat");

export default firebase;