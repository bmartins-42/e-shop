import 'firebase/auth';
import { fireapp, firebase } from './firebase.utils';

console.log(fireapp);
const auth = fireapp.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
const signInWithEmailAndPwd = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
const signUpWithEmailAndPwd = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export { auth, signInWithGoogle, signInWithEmailAndPwd, signUpWithEmailAndPwd };
