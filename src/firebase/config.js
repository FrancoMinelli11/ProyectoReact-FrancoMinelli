import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM1W2CauDU13r2GiSVgDA1OVxkWb-KDd0",
  authDomain: "react-francominelli.firebaseapp.com",
  projectId: "react-francominelli",
  storageBucket: "react-francominelli.appspot.com",
  messagingSenderId: "381631364023",
  appId: "1:381631364023:web:3d43e79d5641e6b728c632",
  measurementId: "G-VSFYBBH5H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)