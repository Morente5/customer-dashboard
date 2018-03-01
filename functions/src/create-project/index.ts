import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const newProject = functions.firestore.document('projects/{projectID}').onCreate(event => {

	const projectID = event.data.id;
	const project = event.data.data();

	// Maybe check Firestore?
	const sections = ['actions', 'ad-words', 'analytics', 'passwords', 'support']

	const arrayPromises = sections.map(sectionName => {
		const sectionProjectDoc = admin.firestore().collection(sectionName).doc(projectID)
		return sectionProjectDoc.set({})
	})

	// Return a promise from an array of promises
	return Promise.all(arrayPromises)
		.then(() => console.log('Written Project Data!'))
		.catch(error => console.log(error));

})
