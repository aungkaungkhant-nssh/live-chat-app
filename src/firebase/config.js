import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
  const firebaseConfig = {
    apiKey: "AIzaSyA63zCTd4ozRZZgmVtmlMJUoBlZOFPXgLo",
    authDomain: "live-chat-app-f4ad0.firebaseapp.com",
    projectId: "live-chat-app-f4ad0",
    storageBucket: "live-chat-app-f4ad0.appspot.com",
    messagingSenderId: "256583436275",
    appId: "1:256583436275:web:ca5d7d266b3fe2b0653486"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth()
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export{db,timestamp,auth};