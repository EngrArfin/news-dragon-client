// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF2s5z6vHlP3xMIT1-vZcGDlQbUOkASH4",
  authDomain: "news-dragon-client-b876c.firebaseapp.com",
  projectId: "news-dragon-client-b876c",
  storageBucket: "news-dragon-client-b876c.appspot.com",
  messagingSenderId: "118398677865",
  appId: "1:118398677865:web:d95b341d5aa5a455a903f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;