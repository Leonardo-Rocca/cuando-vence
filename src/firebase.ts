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

/*
curl -X POST --header "Authorization: key=AAAAUacr8Jo:APA91bFZCh2qkqqVfy53DbJmAMIyQtncmWnvXpZ-OgWXSwupNgDeKE-AEbEZUM4GIFq3R4LFalqGPE69q-zUZhakksOGYvoksTz2zQaXPGl033GcGh-aHHMZZBkkPVnd5XIlr12ZlJLG"   --Header "Content-Type: application/json"    https://fcm.googleapis.com/fcm/send -d "{\"to\":\"eY7uHy4MbH2orOq95edKi8:APA91bE5TuTy2bE8CS_FJKC5fhOfXAWI7e1WymhjmNr7WzI062wfBut-bGPVPF7pjlkKjksLC6WiuVYeM1FVB1XD11KuZ8WhAH1CCJCZv2NySkn36L6JAF6xe5l4A-9AoEwgL_5IDNqO\",\"notification\":{\"body\":\"Yellow\"},\"priority\":10}"


 */