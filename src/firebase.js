import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAx7TK0TR24uu0lWaDklc5c2ydEyWBgkGw",
    authDomain: "whatsapp-mern-5147c.firebaseapp.com",
    projectId: "whatsapp-mern-5147c",
    storageBucket: "whatsapp-mern-5147c.appspot.com",
    messagingSenderId: "835808404126",
    appId: "1:835808404126:web:5426a279b61d6a98b4118f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()


  export {auth, provider}
  export default db