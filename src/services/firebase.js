import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { firebase } from '../lib/firebase';

export async function doesUserNameExist(username) {
  const db = getFirestore(firebase);
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', username.toLowerCase()));
  const result = await getDocs(q);

  return result.docs.length > 0;
}

export async function getUserByUserId(userId) {
  const db = getFirestore(firebase);
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('userId', '==', userId));
  const result = await getDocs(q);

  const user = result.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));

  return user;
}
