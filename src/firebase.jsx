// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBxc2UuPOXxSX6XxlDpOdgOEQLM27YJai4",
//   authDomain: "lddmmc-f9d78.firebaseapp.com",
//   projectId: "lddmmc-f9d78",
//   storageBucket: "lddmmc-f9d78.appspot.com",
//   messagingSenderId: "147578903067",
//   appId: "1:147578903067:web:1bbbafd7861953e49976be",
//   measurementId: "G-0Q6L9ZTD7L"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// // export const analytics = getAnalytics(app);
// export const db = getFirestore(app);

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxc2UuPOXxSX6XxlDpOdgOEQLM27YJai4",
  authDomain: "lddmmc-f9d78.firebaseapp.com",
  projectId: "lddmmc-f9d78",
  storageBucket: "lddmmc-f9d78.appspot.com",
  messagingSenderId: "147578903067",
  appId: "1:147578903067:web:bfc07587bd20eb719976be",
  // measurementId: "G-HWNFMLD74R"
};

if (!firebase.app.lenth) {
  firebase.initializeApp(firebaseConfig);
}
firebase.firestore().settings({ experimentalForceLongPolling: true });
export const firestore = firebase.firestore();