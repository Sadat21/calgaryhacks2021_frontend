import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

const firebase = app.initializeApp({
    apiKey: "AIzaSyBok9BbGPAfsqUvpxxh36aNlAm0lD_RF8U",
    authDomain: "calgary-hacks-2021-304719.firebaseapp.com",
    databaseURL: "https://calgary-hacks-2021-304719-default-rtdb.firebaseio.com",
    projectId: "calgary-hacks-2021-304719",
    storageBucket: "calgary-hacks-2021-304719.appspot.com",
    messagingSenderId: "57096061194",
    appId: "1:57096061194:web:3837bf0e18ca910a4d3af3",
    measurementId: "G-WPRY4BXWF8"
});

export function getDb() {
    return firebase.firestore();
}

export function getAuth() {
    return firebase.auth();
}

export function getStorage() {
    return firebase.storage().ref();
}
