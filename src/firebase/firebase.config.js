// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNd4zUrwxFScmo5OaU9sn-KolttgsHxLI",
  authDomain: "fir-setup-concept.firebaseapp.com",
  projectId: "fir-setup-concept",
  storageBucket: "fir-setup-concept.appspot.com",
  messagingSenderId: "158607906748",
  appId: "1:158607906748:web:14208519905ce2016afdb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth