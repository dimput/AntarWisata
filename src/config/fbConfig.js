import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDAYyZIp2sAyv95dzNrVdWnhbf-E7Y__LA",
    authDomain: "antar-wisata.firebaseapp.com",
    databaseURL: "https://antar-wisata.firebaseio.com",
    projectId: "antar-wisata",
    storageBucket: "",
    messagingSenderId: "220897793707"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;