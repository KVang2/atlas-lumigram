// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhzpJkMMcgbsYD4XRO0185eh7dD73e8Xs",
    authDomain: "lumigram-b7bc3.firebaseapp.com",
    projectId: "lumigram-b7bc3",
    storageBucket: "lumigram-b7bc3.firebasestorage.app",
    messagingSenderId: "130914056657",
    appId: "1:130914056657:web:a0e25e320de095d90808f0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// Initialize Storage
export const storage = getStorage(app);
// Initialize Firestore
export const db = getFirestore(app);