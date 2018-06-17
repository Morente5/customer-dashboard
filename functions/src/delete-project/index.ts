import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const removeProject = functions.firestore.document('projects/{projectID}').onDelete(event => {

	const projectID = event.data().id;

	const arrayPromises = [
		admin.firestore().collection(`projects/${projectID}/actions`).doc('data').delete(),
		admin.firestore().collection(`projects/${projectID}/ad-words`).doc('data').delete(),
		admin.firestore().collection(`projects/${projectID}/analytics`).doc('data').delete(),

	]

	let queryDeletion
	admin.firestore().collection(`projects/${projectID}/passwords`).get().then(querySnapshot => {
		// Once we get the results, begin a batch
		const batch = admin.firestore().batch();

		querySnapshot.forEach(doc => {
			// For each doc, add a delete operation to the batch
			batch.delete(doc.ref);
		});

		// Commit the batch
		return batch.commit();
	}).then(promiseResult => queryDeletion = promiseResult)

	// Return a promise from an array of promises
	return Promise.all(arrayPromises.concat(queryDeletion))
		.then(() => console.log('Deleted Project Data!'))
		.catch(error => console.log(error));

})
