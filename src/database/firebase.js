import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNz5CEdSaUlF_stNd4Ton_z2Kx4qI6l34",
    authDomain: "react-native-firebase-486b3.firebaseapp.com",
    projectId: "react-native-firebase-486b3",
    storageBucket: "react-native-firebase-486b3.appspot.com",
    messagingSenderId: "588425589202",
    appId: "1:588425589202:web:42bb77553cd6bf809bd80b"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
