// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// OUR FIREBASE CONFIGURATION ID/KEYS ARE KEPT IN THE .ENV FILE AND I USED import.meta.env. TO GAIN ACCESS TO THEM JUST AS WE ALWAYS DO PROCESS.ENV IN NODE. THEREFORE, YOU SHOLDN'T BE CONFUSED IF YOUR FIREBASE SDK SNIPPET ISN'T THE SAME AS MINE.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//NOTE THAT YOU HAVE TO EXPORT LIKE YOU HAVE BELOW BY YOURSELF. FIREBASE SDK SNIPPET DOESN'T COME WITH EXPORT
export default app;