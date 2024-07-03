import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBSp8TzTczLbBkhozq7fehYgitkOMwtZUg",
    authDomain: "account-web-app-a1054.firebaseapp.com",
    projectId: "account-web-app-a1054",
    storageBucket: "account-web-app-a1054.appspot.com",
    messagingSenderId: "1086779626178",
    appId: "1:1086779626178:web:5e44da723086eca1a8e15b",
    measurementId: "G-919QH3J874",
    databaseURL:"https://account-web-app-a1054-default-rtdb.firebaseio.com/"
  };
export const app = initializeApp(firebaseConfig);