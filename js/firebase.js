import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyCzUqBtLR3MgmFDSb71leHZrNGZhRVU_-o",

  authDomain: "matelecom-data-entry.firebaseapp.com",

  databaseURL: "https://matelecom-data-entry-default-rtdb.firebaseio.com",

  projectId: "matelecom-data-entry",

  storageBucket: "matelecom-data-entry.firebasestorage.app",

  messagingSenderId: "1020949745883",

  appId: "1:1020949745883:web:bd9c51f11dc37bacf43cfe"

};

const app = initializeApp(firebaseConfig);

export const rtdb = getDatabase(app);
