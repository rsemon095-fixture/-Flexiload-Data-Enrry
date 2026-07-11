// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzUqBtLR3MgmFDSb71leHZrNGZhRVU_-o",
  authDomain: "matelecom-data-entry.firebaseapp.com",
  projectId: "matelecom-data-entry",
  storageBucket: "matelecom-data-entry.firebasestorage.app",
  messagingSenderId: "1020949745883",
  appId: "1:1020949745883:web:bd9c51f11dc37bacf43cfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const rtdb = getDatabase(app);
