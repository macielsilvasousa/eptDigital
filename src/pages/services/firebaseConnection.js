import firebase from "firebase/app";
import "firebase/database";

/*

let firebaseConfig = {
  apiKey: "AIzaSyAbdLaygFfpsXQoz83X8LZDSv-ONSgLvB0",
  authDomain: "myapp-2c67a.firebaseapp.com",
  projectId: "myapp-2c67a",
  storageBucket: "myapp-2c67a.appspot.com",
  messagingSenderId: "484239545916",
  appId: "1:484239545916:web:861de459f3029ddd35d539",
  measurementId: "G-TBFQQS71FF"
};

*/
let firebaseConfig = {
  apiKey: "AIzaSyDj-9uYT2LFhTjwibXB9tCg8msoDJrL4Fk",
  authDomain: "teste-c29ee.firebaseapp.com",
  projectId: "teste-c29ee",
  storageBucket: "teste-c29ee.appspot.com",
  messagingSenderId: "217195414781",
  appId: "1:217195414781:web:3cb336f660aeed5c69ea94",
  measurementId: "G-61H41DMS27"
};

// Initialize Firebase

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;

  