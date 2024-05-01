import { getFirestore, collection, addDoc } from 'firebase/firestore';

export function seedDatabase(firebase) {
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

  for (let i = 1; i <= 5; ++i) {
    addDoc(collection(getFirestore(firebase), 'photos'), {
      photoId: i,
      userId: '2',
      imageSrc: `/images/users/jisoo/${i}.jpg`,
      caption: '<3',
      likes: [],
      comments: [
        {
          displayName: 'dali',
          comment: 'Love this!',
        },
        {
          displayName: 'orwell',
          comment: 'Would you mind if I use this picture?',
        },
      ],
      userLatitude: '40.7128°',
      userLongitude: '74.0060°',
      dateCreated: Date.now(),
    });
  }
}
