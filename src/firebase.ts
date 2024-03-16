import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyBi2HSmna92kq4uF60pM31qpad66L1RtXY',
	authDomain: 'healthtech-53225.firebaseapp.com',
	projectId: 'healthtech-53225',
	storageBucket: 'healthtech-53225.appspot.com',
	messagingSenderId: '830645533750',
	appId: '1:830645533750:web:fa7d1e3f2ab892f7892c97',
}

const app = initializeApp(firebaseConfig)
export { app }
