import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAACUrq-vH775qG3EApKynl-XXMLofRssQ',
	authDomain: 'sveltekit-profshare.firebaseapp.com',
	projectId: 'sveltekit-profshare',
	storageBucket: 'sveltekit-profshare.appspot.com',
	messagingSenderId: '61323320966',
	appId: '1:61323320966:web:8e55be83505fd47c627b07'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
