// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC0OjSa5Ot2AORFnevFLul7ADnGK6i6dU",
  authDomain: "netflixgpt-2b360.firebaseapp.com",
  projectId: "netflixgpt-2b360",
  storageBucket: "netflixgpt-2b360.appspot.com",
  messagingSenderId: "892122330607",
  appId: "1:892122330607:web:6c15fcdd428a9d2718b21a",
  measurementId: "G-M9X990X9ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();