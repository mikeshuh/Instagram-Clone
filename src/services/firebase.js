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
