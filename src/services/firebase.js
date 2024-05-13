import {
  getFirestore,
  collection,
  query,
  where,
  limit,
  getDocs,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from 'firebase/firestore';
import { firebase } from '../lib/firebase';

export async function doesUserNameExist(username) {
  const db = getFirestore(firebase);
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', username.toLowerCase()));
  const result = await getDocs(q);

  return result.docs.length > 0;
}

export async function getUserByUsername(username) {
  const db = getFirestore(firebase);
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', username.toLowerCase()));
  const result = await getDocs(q);

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
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

export async function getSuggestedProfiles(userId, following) {
  const db = getFirestore(firebase);
  const usersRef = collection(db, 'users');
  let q;

  if (following.length > 0) {
    q = query(usersRef, where('userId', 'not-in', [...following, userId]));
  } else {
    q = query(usersRef, where('userId', '!=', userId));
  }

  q = query(q, limit(10)); // Apply limit to the constructed query
  const result = await getDocs(q);

  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id,
  }));

  return profiles;
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  const db = getFirestore(firebase);
  const userDocRef = doc(db, 'users', loggedInUserDocId);
  return updateDoc(userDocRef, {
    following: isFollowingProfile
      ? arrayRemove(profileId)
      : arrayUnion(profileId),
  });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  loggedInUserDocId,
  isFollowingProfile
) {
  const db = getFirestore(firebase);
  const profileDocRef = doc(db, 'users', profileDocId);
  return updateDoc(profileDocRef, {
    followers: isFollowingProfile
      ? arrayRemove(loggedInUserDocId)
      : arrayUnion(loggedInUserDocId),
  });
}

export async function getPhotos(userId, following) {
  const db = getFirestore(firebase);
  const photosRef = collection(db, 'photos');
  const q = query(photosRef, where('userId', 'in', following));
  const result = await getDocs(q);

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}

export async function getUserPhotosByUserId(userId) {
  const db = getFirestore(firebase);
  const photosRef = collection(db, 'photos');
  const q = query(photosRef, where('userId', '==', userId));
  const result = await getDocs(q);

  const photos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  return photos;
}

export async function isUserFollowingProfile(
  loggedInUserUsername,
  profileUserId
) {
  const db = getFirestore(firebase);
  const usersRef = collection(db, 'users');
  const q = query(
    usersRef,
    where('username', '==', loggedInUserUsername),
    where('following', 'array-contains', profileUserId)
  );
  const result = await getDocs(q);

  const [response = {}] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return response.userId;
}

export async function toggleFollow(
  isFollowingProfile,
  activeUserDocId,
  profileDocId,
  profileUserId,
  followingUserId
) {
  await updateLoggedInUserFollowing(
    activeUserDocId,
    profileUserId,
    isFollowingProfile
  );
  await updateFollowedUserFollowers(
    profileDocId,
    followingUserId,
    isFollowingProfile
  );
}
