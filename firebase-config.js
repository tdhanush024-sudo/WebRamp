// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBydyB9JJDts8SyTGemyKgLqGgSHdmPrVA",
  authDomain: "webramp-311bf.firebaseapp.com",
  projectId: "webramp-311bf",
  storageBucket: "webramp-311bf.firebasestorage.app",
  messagingSenderId: "1018077380381",
  appId: "1:1018077380381:web:bda6727a55418dba472bf4",
  measurementId: "G-CGN5S4LXQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };