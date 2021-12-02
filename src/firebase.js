import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyD8hiLi1IldzAbcVEx83c6MooRLFGrB1UI",
  authDomain: "ecommerce-project-5b0cc.firebaseapp.com",
  projectId: "ecommerce-project-5b0cc",
  storageBucket: "ecommerce-project-5b0cc.appspot.com",
  messagingSenderId: "815178107972",
  appId: "1:815178107972:web:56390cc15ae36d042b4011",
  measurementId: "G-9S4000GSRN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };

// // const firebaseConfig = {
// //     apiKey: "AIzaSyD8hiLi1IldzAbcVEx83c6MooRLFGrB1UI",
// //     authDomain: "ecommerce-project-5b0cc.firebaseapp.com",
// //     projectId: "ecommerce-project-5b0cc",
// //     storageBucket: "ecommerce-project-5b0cc.appspot.com",
// //     messagingSenderId: "815178107972",
// //     appId: "1:815178107972:web:56390cc15ae36d042b4011",
// //     measurementId: "G-9S4000GSRN"
// //   };
