import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const removeProject = functions.firestore.document('projects/{projectID}').onDelete(event => {

	const projectID = event.data().id;

	// Maybe check Firestore?
	const sections = ['actions', 'ad-words', 'analytics', 'passwords', 'support']

	const arrayPromises = sections.map(sectionName => {
		const sectionProjectDoc = admin.firestore().collection(sectionName).doc(projectID)
		return sectionProjectDoc.delete()
	})

	// Return a promise from an array of promises
	return Promise.all(arrayPromises)
		.then(() => console.log('Deleted Project Data!'))
		.catch(error => console.log(error));

})
