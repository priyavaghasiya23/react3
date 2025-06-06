// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0rVWMRkEm3TJIDyZQCtjtFWNfYdQr7Dg",
//   authDomain: "react3-9ce51.firebaseapp.com",
//   projectId: "react3-9ce51",
//   storageBucket: "react3-9ce51.firebasestorage.app",
//   messagingSenderId: "583550036987",
//   appId: "1:583550036987:web:5bbba89a589e3f1daef95e"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// google singup

// Import the functions you need from the SDKs you need
// src/firebase.js
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHBiCxL9LfkZO2PShaD1GLF-qs3nSUnts",
  authDomain: "fir-42132.firebaseapp.com",
  databaseUrl: "https://react3-9ce51-default-rtdb.firebaseio.com",
  projectId: "fir-42132",
  storageBucket: "fir-42132.firebasestorage.app",
  messagingSenderId: "577507233852",
  appId: "1:577507233852:web:4783a893a9f891cfdb3339"
};


const app = initializeApp(firebaseConfig);

  // Firestore database
const db = getFirestore(app);

//  Export both
export { app, db };
