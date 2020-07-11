import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbOax-9wp5A22eUTIrgW5hAzu6V65i3fY",
    authDomain: "cuando-vence.firebaseapp.com",
    databaseURL: "https://cuando-vence.firebaseio.com",
    projectId: "cuando-vence",
    storageBucket: "cuando-vence.appspot.com",
    messagingSenderId: "350697025690",
    appId: "1:350697025690:web:28aa0c17e120f1ed922f23",
    measurementId: "G-M0T9CQ2GB3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase