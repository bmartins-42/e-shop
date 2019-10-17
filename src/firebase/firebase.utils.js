import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDMlGlxv6zlD6sfhY0vpU_DGEW2MlAGKiM',
  authDomain: 'my-game-shop.firebaseapp.com',
  databaseURL: 'https://my-game-shop.firebaseio.com',
  projectId: 'my-game-shop',
  storageBucket: 'my-game-shop.appspot.com',
  messagingSenderId: '963461751156',
  appId: '1:963461751156:web:71f6e6b814ae16b2a00c21'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, firestore, signInWithGoogle };