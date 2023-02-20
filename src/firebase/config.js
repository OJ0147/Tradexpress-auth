
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCx0QSZon_--cWvoJFsJspIJzh50axj2_E",
  authDomain: "tradexpressauth.firebaseapp.com",
  projectId: "tradexpressauth",
  storageBucket: "tradexpressauth.appspot.com",
  messagingSenderId: "195208286481",
  appId: "1:195208286481:web:afe8a3df06e18c71893cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

