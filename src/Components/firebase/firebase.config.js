// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPIxW9q6k7TqDgPCVHTEYeWqZtmIUc27k",
  authDomain: "authentication-fb-practice-1.firebaseapp.com",
  projectId: "authentication-fb-practice-1",
  storageBucket: "authentication-fb-practice-1.appspot.com",
  messagingSenderId: "176231240683",
  appId: "1:176231240683:web:65833a6ad70ddc8c3f7fae",
  measurementId: "G-T5GBJ7NSB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;