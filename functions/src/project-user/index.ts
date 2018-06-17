import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const addProjectToUser = functions.firestore.document('users/{userID}').onUpdate(event => {
	const user = event.after.data();

	const userID = event.before.id
	const userProjects = user.projects
	const projectsID = Object.keys(userProjects)

	console.log(userID, userProjects)

	// This map return an array of promises
	const arrayPromises = projectsID.map(projectID => {
		const projectDoc = admin.firestore().collection('projects').doc(projectID)

		return projectDoc.update({
			[`users.${userID}`]: userProjects[projectID]
		})
	})

	// Return a promise from an array of promises
	return Promise.all(arrayPromises)
		.then(() => console.log('Written Project Data!'))
		.catch(error => console.log(error));

})
