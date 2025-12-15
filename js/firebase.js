// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2xWj8Tycwm60CdUfXLhJjsBTXpP6wmVc",
  authDomain: "national-auto-garage.firebaseapp.com",
  projectId: "national-auto-garage",
  storageBucket: "national-auto-garage.firebasestorage.app",
  messagingSenderId: "866545378100",
  appId: "1:866545378100:web:e847dce29547ad33c8fb61"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 🔐 EMAIL SIGNUP
window.emailSignup = async function (email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
};

// 🔐 EMAIL LOGIN
window.emailLogin = async function (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🔐 GOOGLE LOGIN
window.googleSignup = async function () {
  return signInWithPopup(auth, googleProvider);
};

// 🔐 LOGOUT
window.logoutUser = async function () {
  return signOut(auth);
};
