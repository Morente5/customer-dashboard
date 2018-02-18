import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

admin.initializeApp(functions.config().firebase);

export const newUser = functions.auth.user().onCreate(event => {
	const user = event.data; // The Firebase user.

	const uid = user.uid;
	const email = user.email;

	const userDoc = admin.firestore().collection('users').doc(uid)

	const data = {
		email: email,
		displayName: email,
		emailVerified: true,
		access: 'reader'
	}

	console.log(data)

	return userDoc.set(data)
		.then(() => console.log('Written User Data!'))
		.catch(error => console.log(error));

})
