import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBXWh0gxAjPudOJS4RYG8AvbZ4RICT82zA",
    authDomain: "live-chat-app-e2577.firebaseapp.com",
    projectId: "live-chat-app-e2577",
    storageBucket: "live-chat-app-e2577.appspot.com",
    messagingSenderId: "1079864299922",
    appId: "1:1079864299922:web:2d73d938881f45029ff14b"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth()
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export{db,timestamp,auth};