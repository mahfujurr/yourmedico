// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwJ0c7j5Z9ucqUMJ3sZb_adU-O-XsBRcM",
  authDomain: "yourmedico-100da.firebaseapp.com",
  projectId: "yourmedico-100da",
  storageBucket: "yourmedico-100da.appspot.com",
  messagingSenderId: "408963694052",
  appId: "1:408963694052:web:ae623c9aea8911981d1bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;