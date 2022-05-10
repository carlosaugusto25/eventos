import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAzo4Axfyepb5kX8Su2iVcmvDX4I75LtZ0",
  authDomain: "eventos-f4f02.firebaseapp.com",
  projectId: "eventos-f4f02",
  storageBucket: "eventos-f4f02.appspot.com",
  messagingSenderId: "722605648666",
  appId: "1:722605648666:web:5e013428322fe1243adaa3"
};

export default firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();
 export const database = firebase.database();
