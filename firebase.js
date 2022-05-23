// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8CucewejXmozwxt5oNqoeCTCcC_1JW30',
  authDomain: 'ig-clone-next.firebaseapp.com',
  projectId: 'ig-clone-next',
  storageBucket: 'ig-clone-next.appspot.com',
  messagingSenderId: '351767087387',
  appId: '1:351767087387:web:dd23cb27060ffb90be2bbe',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
