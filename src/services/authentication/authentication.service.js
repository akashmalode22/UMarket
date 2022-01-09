import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARJcWt7DBUYAa4yR5YKT1iQUYltnfMQSc",
  authDomain: "umarket-69196.firebaseapp.com",
  projectId: "umarket-69196",
  storageBucket: "umarket-69196.appspot.com",
  messagingSenderId: "71304666835",
  appId: "1:71304666835:web:f9de5601ad1abd4c3c7e26",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
