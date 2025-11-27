// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBozeeIFzY6IQPZCFqWP6yObL_XDaz-ews",
  authDomain: "gym-management-system-6fef2.firebaseapp.com",
  projectId: "gym-management-system-6fef2",
  storageBucket: "gym-management-system-6fef2.firebasestorage.app",
  messagingSenderId: "774449258965",
  appId: "1:774449258965:web:407faed47cdfa50ce01d5c",
  measurementId: "G-M5KJMYS6PC"
};
// Initialize Firebase (compat)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

window.auth = firebase.auth();
window.db = firebase.firestore();

console.log("✅ Firebase initialized successfully");
