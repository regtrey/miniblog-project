import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBl0ltkq49feo8N2Bi9hXYCWzIzvLujywU',
  authDomain: 'miniblog-project-c391b.firebaseapp.com',
  projectId: 'miniblog-project-c391b',
  storageBucket: 'miniblog-project-c391b.appspot.com',
  messagingSenderId: '449016168821',
  appId: '1:449016168821:web:fa8cfc01d63af5f2c3d33c',
  measurementId: 'G-1RJ4PEY929',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
