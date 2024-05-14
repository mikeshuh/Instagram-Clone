import { getFirestore, collection, addDoc } from 'firebase/firestore';

export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'kGB6dlPDgkTJylmehzAprutDT0e2',
      username: 'michael',
      fullName: 'Michael Huh',
      emailAddress: 'michael.stephen.huh@gmail.com',
      following: [
        'Ei3OTTFUp1UVqBctxLuL4sEav1n2',
        'zxtTCPZ5rAUAlKZpCNJVW8wu14F2',
        'XThekPHeloY9t8Wbbih6kAFGx1J2',
      ],
      followers: [
        'Ei3OTTFUp1UVqBctxLuL4sEav1n2',
        'zxtTCPZ5rAUAlKZpCNJVW8wu14F2',
        'XThekPHeloY9t8Wbbih6kAFGx1J2',
      ],
      dateCreated: Date.now(),
    },
    {
      userId: 'XThekPHeloY9t8Wbbih6kAFGx1J2',
      username: 'jisoo',
      fullName: 'Ji Soo Kim',
      emailAddress: 'jisookim@gmail.com',
      following: [
        'kGB6dlPDgkTJylmehzAprutDT0e2',
        'zxtTCPZ5rAUAlKZpCNJVW8wu14F2',
      ],
      followers: [
        'kGB6dlPDgkTJylmehzAprutDT0e2',
        'zxtTCPZ5rAUAlKZpCNJVW8wu14F2',
      ],
      dateCreated: Date.now(),
    },
    {
      userId: 'Ei3OTTFUp1UVqBctxLuL4sEav1n2',
      username: 'james',
      fullName: 'James Kim',
      emailAddress: 'jameskim@gmail.com',
      following: ['kGB6dlPDgkTJylmehzAprutDT0e2'],
      followers: ['kGB6dlPDgkTJylmehzAprutDT0e2'],
      dateCreated: Date.now(),
    },
    {
      userId: 'zxtTCPZ5rAUAlKZpCNJVW8wu14F2',
      username: 'ryan',
      fullName: 'Ryan Tang',
      emailAddress: 'ryantang@gmail.com',
      following: [
        'kGB6dlPDgkTJylmehzAprutDT0e2',
        'XThekPHeloY9t8Wbbih6kAFGx1J2',
      ],
      followers: [
        'kGB6dlPDgkTJylmehzAprutDT0e2',
        'XThekPHeloY9t8Wbbih6kAFGx1J2',
      ],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    addDoc(collection(getFirestore(firebase), 'users'), users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    addDoc(collection(getFirestore(firebase), 'photos'), {
      photoId: i,
      userId: 'XThekPHeloY9t8Wbbih6kAFGx1J2',
      imageSrc: `/images/users/jisoo/${i}.jpg`,
      caption: '<3',
      likes: [],
      comments: [],
      dateCreated: Date.now(),
    });
  }
  for (let i = 1; i <= 6; ++i) {
    addDoc(collection(getFirestore(firebase), 'photos'), {
      photoId: i + 5,
      userId: 'zxtTCPZ5rAUAlKZpCNJVW8wu14F2',
      imageSrc: `/images/users/ryan/${i}.jpg`,
      caption: ':)',
      likes: [],
      comments: [],
      dateCreated: Date.now(),
    });
  }
  for (let i = 1; i <= 5; ++i) {
    addDoc(collection(getFirestore(firebase), 'photos'), {
      photoId: i + 11,
      userId: 'Ei3OTTFUp1UVqBctxLuL4sEav1n2',
      imageSrc: `/images/users/james/${i}.jpg`,
      caption: ':p',
      likes: [],
      comments: [],
      dateCreated: Date.now(),
    });
  }
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
