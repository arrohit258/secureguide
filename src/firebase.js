// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjdw8oTJv71FKxfRHTi0zs7T8XBQOePHw",
  authDomain: "travelguide-e88ae.firebaseapp.com",
  projectId: "travelguide-e88ae",
  storageBucket: "travelguide-e88ae.appspot.com",
  messagingSenderId: "67989473018",
  appId: "1:67989473018:web:310d3b3723c6fe51382b43",
  measurementId: "G-88T74GEFCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth()

//const analytics = getAnalytics(app);
export default app