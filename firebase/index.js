// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3Sn2umw6ZPY_x5VE9zBT-AUncv52Qps",
  authDomain: "grocerylist-e10bf.firebaseapp.com",
  projectId: "grocerylist-e10bf",
  storageBucket: "grocerylist-e10bf.appspot.com",
  messagingSenderId: "165348144093",
  appId: "1:165348144093:web:413bf249b15421f11cbc34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{ app, db, getFirestore, collection, addDoc };
