import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4EKPYpJ1fwwVdmlqSG3mksKQhtE918ao",
  authDomain: "authordomain-5cfc3.firebaseapp.com",
  projectId: "authordomain-5cfc3",
  storageBucket: "authordomain-5cfc3.appspot.com",
  messagingSenderId: "734127317073",
  appId: "1:734127317073:web:46902cd540b70d29d2d870",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };