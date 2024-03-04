import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyACyvopIF8MxhP9ExvaFYwW0E8F9-uRWrw",
  authDomain: "rentistan-005.firebaseapp.com",
  databaseURL: "https://rentistan-005-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rentistan-005",
  storageBucket: "rentistan-005.appspot.com",
  messagingSenderId: "881555834519",
  appId: "1:881555834519:web:35e97843ca047ff9680bd2",
  measurementId: "G-002W4EKGP6"
};
const auth = getAuth(app);
auth.languageCode = 'en';
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function()
{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(User);
      window.location.href = "";
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
})