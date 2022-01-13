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
  serverTimestamp,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
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
const storage = getStorage();

export const userLoggedIn = (usr) => onAuthStateChanged(auth, usr);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const addItemToDatabase = async (itemObj, user) => {
  try {
    const newItemRef = doc(collection(db, "items"));
    itemObj["id"] = newItemRef.id;
    itemObj["sold"] = false;
    itemObj["user"] = user.email;
    await setDoc(newItemRef, itemObj);

    const docRef = doc(db, "items", newItemRef.id);
    const updateTimestamp = await updateDoc(docRef, {
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getItemsFromDatabase = async () => {
  const q = query(collection(db, "items"), orderBy("timestamp"));
  const itemsSnapshot = await getDocs(q);
  const itemsList = itemsSnapshot.docs.map((doc) => doc.data());
  return itemsList.reverse();
};

export const uploadImageToDatabase = async (file) => {
  const response = await fetch(file.uri);
  const blob = await response.blob();
  const storageRef = ref(storage, `images/${file.name}`);

  uploadBytes(storageRef, blob).then(() => {
    getDownloadURL(ref(storage, `images/${file.name}`)).then((url) => {
      console.log(url);
      return url;
    });
  });
};
