import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCY5-XGwi2_IWY74EK3krdV0sWDlTwyQcY',
	authDomain: 'truff-bank.firebaseapp.com',
	projectId: 'truff-bank',
	storageBucket: 'truff-bank.appspot.com',
	messagingSenderId: '139275056604',
	appId: '1:139275056604:web:4df302014fa82faf390b19',
	measurementId: 'G-GXXG37C77H',
}

initializeApp(firebaseConfig)

export const auth = getAuth()

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const db = getFirestore()
