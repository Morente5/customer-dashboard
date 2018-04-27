import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const newProject = functions.firestore.document('projects/{projectID}').onCreate(event => {

	const projectID = event.get('id');
	const project = event.data();

	const arrayPromises = [
		admin.firestore().collection(`projects/${projectID}/actions`).doc('data').set({url: null}),
		admin.firestore().collection(`projects/${projectID}/adwords`).doc('data').set({mobileUrl: null, desktopUrl: null}),
		admin.firestore().collection(`projects/${projectID}/analytics`).doc('data').set({mobileUrl: null, desktopUrl: null}),
		admin.firestore().collection(`projects/${projectID}/support`).doc('data').set({user: null}),
	]

	// Return a promise from an array of promises
	return Promise.all(arrayPromises)
		.then(() => console.log('Written Project Data!'))
		.catch(error => console.log(error));

})
