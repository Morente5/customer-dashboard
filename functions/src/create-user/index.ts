import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const newUser = functions.auth.user().onCreate(event => {
	const user = event.data; // The Firebase user.

	const uid = user.uid;
	const email = user.email;

	const userDoc = admin.firestore().collection('users').doc(uid)

	// Array of project IDs
	let projectsID = []

	return admin.firestore().collection('projects').get()
		.then(querySnapshot => {
			projectsID = querySnapshot.docs.map(project => project.id)

			const projectsFalse = {}

			projectsID.forEach(projectID => {
				projectsFalse[projectID] = false;
			})

			const data = {
				email: email,
				displayName: email,
				emailVerified: true,
				access: 'reader',
				projects: projectsFalse
			}

			console.log(data)

			return userDoc.set(data)
		})
		.then(() => console.log('Written User Data!'))
		.catch(console.log)

})
