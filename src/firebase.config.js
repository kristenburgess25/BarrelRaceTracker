import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDE-k5mSHBauXLEenA_VhZvpBSJFZ8XgMg',
  authDomain: 'personal-project-3c259.firebaseapp.com',
  databaseURL: 'https://personal-project-3c259.firebaseio.com',
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
