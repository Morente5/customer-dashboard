import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const newProject = functions.firestore.document('projects/{projectID}').onCreate(event => {

	const projectID = event.id;
	const project = event.data();

	const arrayPromises = [
		admin.firestore().collection(`projects/${projectID}/actions`).doc('data').set({ID: null}),
		admin.firestore().collection(`projects/${projectID}/ad-words`).doc('data').set({mobileID: null, desktopID: null}),
		admin.firestore().collection(`projects/${projectID}/analytics`).doc('data').set({mobileID: null, desktopID: null}),
	]

	// Return a promise from an array of promises
	return Promise.all(arrayPromises)
		.then(() => console.log('Written Project Data!'))
		.catch(error => console.log(error));

})
