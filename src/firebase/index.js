import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDalhOYhHVJIQ7--ie_ix9Ssv50U3166nQ",
  authDomain: "main-project-year-2.firebaseapp.com",
  projectId: "main-project-year-2",
  storageBucket: "main-project-year-2.appspot.com",
  messagingSenderId: "794641312300",
  appId: "1:794641312300:web:26530fa50b4f0a026a7f89"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);