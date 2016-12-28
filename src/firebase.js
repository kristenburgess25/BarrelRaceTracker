import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDE-k5mSHBauXLEenA_VhZvpBSJFZ8XgMg',
  authDomain: 'personal-project-3c259.firebaseapp.com',
  databaseURL: 'https://personal-project-3c259.firebaseio.com',
  storageBucket: 'personal-project-3c259.appspot.com',
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('barrelraces');
