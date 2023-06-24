import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

import { getStorage } from 'firebase/storage'
import { ref as dbRef, onValue } from 'firebase/database'
import { ref as storageRef, uploadBytes } from 'firebase/storage'
import {
  getFirestore,
  query,
  addDoc,
  onSnapshot,
  collection,
  doc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCsAc5WW8d0WE9L0iVHgYf0cSLe3tE8FKY',
  authDomain: 'cdlhirelink.firebaseapp.com',
  projectId: 'cdlhirelink',
  storageBucket: 'cdlhirelink.appspot.com',
  messagingSenderId: '1076134700049',
  appId: '1:1076134700049:web:ab158fc3b8c59e8c70fdb0',
  measurementId: 'G-G5PDL01711',
  databaseURL: 'https://cdlhirelink-default-rtdb.firebaseio.com/',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const storage = getStorage(app)
const firestore = getFirestore(app)

export { database, storage, onValue, dbRef, storageRef, uploadBytes, firestore }
