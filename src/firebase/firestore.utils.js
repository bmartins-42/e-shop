import 'firebase/firestore';
import { firebase } from './firebase.utils';

const firestore = firebase.firestore();

const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  try {
    const userSnap = await userRef.get();
    if (!userSnap.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({
        email,
        createdAt,
        displayName,
        ...data
      });
    }
  } catch (err) {
    console.error('Failed to create user profile: ', err);
  }
  return userRef;
};

export { firestore, createUserProfileDocument };
