import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const config = {};

const firebase = initializeApp(config);
const { FieldValue } = getFirestore(firebase);

export { firebase, FieldValue };
