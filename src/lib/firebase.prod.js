import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from './../seed';

const config = {
  apiKey: 'AIzaSyCObmuxmJdgi5_f4uOF9j1kwix78cDjNfA',
  authDomain: 'netlix-clone-5db71.firebaseapp.com',
  projectId: 'netlix-clone-5db71',
  storageBucket: 'netlix-clone-5db71.appspot.com',
  messagingSenderId: '938749886146',
  appId: '1:938749886146:web:abcec1c3ef14cfcb97455b',
};

const firebaseConnection = firebase.initializeApp(config);

// seedDatabase(firebaseConnection);

export { firebaseConnection };
