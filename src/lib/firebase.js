import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import seed file

const config = {
  apiKey: 'AIzaSyDNO86N85dyM908RoE4gXdUPZRCL99nYNs',
  authDomain: 'instagram-clone-ecf46.firebaseapp.com',
  projectId: 'instagram-clone-ecf46',
  storageBucket: 'instagram-clone-ecf46.appspot.com',
  messagingSenderId: '360716897049',
  appId: '1:360716897049:web:05874fca1d8dd00cbad388',
};

const firebase = initializeApp(config);
const { FieldValue } = getFirestore(firebase);

// call seed file only once
// seedDatabase(firebase)

export { firebase, FieldValue };
