// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: "taskmanager-557d7.firebaseapp.com",
//   projectId: "taskmanager-557d7",
//   storageBucket: "taskmanager-557d7.appspot.com",
//   messagingSenderId: "824261215224",
//   appId: "1:824261215224:web:ba24631a12b4bf9d5e8c0d",
// };

// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDLKCsiN2qGf54F8bE51EYRS57rMN6tLDw",
  authDomain: "taskmanagement-8a883.firebaseapp.com",
  projectId: "taskmanagement-8a883",
  storageBucket: "taskmanagement-8a883.firebasestorage.app",
  messagingSenderId: "250112858832",
  appId: "1:250112858832:web:28b738af969e01f71b9cd5",
  measurementId: "G-VJ0D2SPH6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);