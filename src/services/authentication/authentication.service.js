import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  addDoc,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";

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
const db = getFirestore(app);

export const userLoggedIn = (usr) => onAuthStateChanged(auth, usr);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const addItemToDatabase = async (itemObj) => {
  try {
    await addDoc(collection(db, "items"), itemObj);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getItemsFromDatabase = async () => {
  const itemsCol = collection(db, "items");
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map((doc) => doc.data());
  return itemsList;
};
