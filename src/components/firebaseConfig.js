import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBI0zDOklcaMLn11m0tgyGSArvoQGOYkns',
  authDomain: 'space-6f9ed.firebaseapp.com',
  projectId: 'space-6f9ed',
  storageBucket: 'space-6f9ed.appspot.com',
  messagingSenderId: '489210055871',
  appId: '1:489210055871:web:ec196bd2d1930df0c44a0a',
  databaseURL:
    'https://space-6f9ed-default-rtdb.europe-west1.firebasedatabase.app/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
