import { getFirestore, collection, addDoc } from 'firebase/firestore';

export function seedDatabase(firebase) {
  /*
  const users = [
    {
      userId: 'kGB6dlPDgkTJylmehzAprutDT0e2',
      username: 'michael',
      fullName: 'Michael Huh',
      emailAddress: 'michael.stephen.huh@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now(),
    },
    {
      userId: '2',
      username: 'jisoo',
      fullName: 'JiSoo Kim',
      emailAddress: 'Jisoo.kim1710@gmail.com',
      following: [],
      followers: ['kGB6dlPDgkTJylmehzAprutDT0e2'],
      dateCreated: Date.now(),
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: ['kGB6dlPDgkTJylmehzAprutDT0e2'],
      dateCreated: Date.now(),
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: ['kGB6dlPDgkTJylmehzAprutDT0e2'],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    addDoc(collection(getFirestore(firebase), 'users'), users[k]);
  }
*/
  for (let i = 1; i <= 4; ++i) {
    addDoc(collection(getFirestore(firebase), 'photos'), {
      photoId: i + 16,
      userId: 'kGB6dlPDgkTJylmehzAprutDT0e2',
      imageSrc: `/images/users/michael/${i}.jpg`,
      caption: ':D',
      likes: [],
      comments: [],
      dateCreated: Date.now(),
    });
  }
}
