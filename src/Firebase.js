import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC96gK0X34XeZ1s7Bae_JGa_UshcZz1gcM",
    authDomain: "mbworksblog.firebaseapp.com",
    databaseURL: "https://mbworksblog.firebaseio.com",
    projectId: "mbworksblog",
    storageBucket: "mbworksblog.appspot.com",
    messagingSenderId: "530136203593",
    appId: "1:530136203593:web:bcc82df939958d2f5f9a98",
    measurementId: "G-1TMSCLJ3C5"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;

