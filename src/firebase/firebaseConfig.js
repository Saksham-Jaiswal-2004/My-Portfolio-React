// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9xk6I4tWTIRl6iJwTJRZIFC9-QyaR4zs",
  authDomain: "my-portfolio-f8433.firebaseapp.com",
  projectId: "my-portfolio-f8433",
  storageBucket: "my-portfolio-f8433.firebasestorage.app",
  messagingSenderId: "996552966871",
  appId: "1:996552966871:web:d94d68bff34db78c446692",
  measurementId: "G-4HNZW58NLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore database instance
const db = getFirestore(app);

export { db };