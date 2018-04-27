import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const removeUser = functions.firestore.document('users/{userID}').onDelete(event => {

	const uid = event.data().id;

	return admin.auth().deleteUser(uid)
		.then(() => console.log('Deleted User Data!'))
		.catch(console.log)
})
