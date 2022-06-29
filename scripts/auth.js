// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyRULcF-4DAFzapesMfowJLY0F7R8ddZg",
  authDomain: "obliteration-b71e1.firebaseapp.com",
  projectId: "obliteration-b71e1",
  storageBucket: "obliteration-b71e1.appspot.com",
  messagingSenderId: "259747363387",
  appId: "1:259747363387:web:e05ed2c11420566bdbfa1e",
  measurementId: "G-C7FT1KSJB1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();

db.settings( {  timestampsInSnapshots: true } )
