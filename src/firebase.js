import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCXT7bA1HexLMvDQYQgziY7WpYct8AWAA",
    authDomain: "store-data-verify.firebaseapp.com",
    projectId: "store-data-verify",
    storageBucket: "store-data-verify.appspot.com",
    messagingSenderId: "620298546594",
    appId: "1:620298546594:web:17de338cb732c164d656fb"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebase