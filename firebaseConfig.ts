// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkjPsYxftkMUtsoYOmg1A0jgAf4MEwEsQ",
  authDomain: "lumigram-f26f2.firebaseapp.com",
  projectId: "lumigram-f26f2",
  storageBucket: "lumigram-f26f2.firebasestorage.app",
  messagingSenderId: "875152254403",
  appId: "1:875152254403:web:7116db2a20ef02e39c0976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});