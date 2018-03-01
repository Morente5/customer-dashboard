import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const removeUser = functions.auth.user().onDelete(event => {
	const uid = event.data.uid;

	const userDoc = admin.firestore().collection('users').doc(uid)

	userDoc.delete()
		.then(() => console.log('Deleted User Data!'))
		.catch(console.log)
})
