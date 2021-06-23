import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBxJA8vrUVozaPMH3tn4a7BwWmWZnnbZ6w',
  authDomain: 'letmeask-bootcamp.firebaseapp.com',
  databaseURL: 'https://letmeask-bootcamp-default-rtdb.firebaseio.com/',
  projectId: 'letmeask-bootcamp',
  storageBucket: 'letmeask-bootcamp.appspot.com',
  messagingSenderId: '928287726888',
  appId: '1:928287726888:web:b4e483f141ac60e18f041d',
  measurementId: 'G-SMMQCE6Y8E',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
