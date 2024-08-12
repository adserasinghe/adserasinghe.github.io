// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-T35fVfKZ_HL44Y0k82u-_YWtdvp5ScA",
  authDomain: "adserasinghe-web.firebaseapp.com",
  databaseURL: "https://adserasinghe-web-default-rtdb.firebaseio.com",
  projectId: "adserasinghe-web",
  storageBucket: "adserasinghe-web.appspot.com",
  messagingSenderId: "76922056684",
  appId: "1:76922056684:web:c7849145c802f547951ac9",
  measurementId: "G-ESMZPF3PPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {} from 'firebase/auth';
import { } from 'firebase/analytics';
