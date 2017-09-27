import { Injectable } from '@angular/core';


import { FirebaseApp } from 'angularfire2';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

export const firebaseConfig = {
	apiKey: 'AIzaSyBpzP5Elt_aSv3KB87n_VRVvuJ7ZeXHugM',
	authDomain: 'dashboard-braun-marketing.firebaseapp.com',
	databaseURL: 'https://dashboard-braun-marketing.firebaseio.com',
	projectId: 'dashboard-braun-marketing',
	storageBucket: 'dashboard-braun-marketing.appspot.com',
	messagingSenderId: '774638353867'
};

@Injectable()
export class UsersService {

	constructor() { }

	createUser(em, pwd) {
		const createUserApp: FirebaseApp = firebase.initializeApp(firebaseConfig, 'createUserApp');
		createUserApp.auth().createUserWithEmailAndPassword(em, pwd).then(firebaseUser => {
			console.log('Creado:', firebaseUser)
			// createUserApp.auth().currentUser.sendEmailVerification()
			createUserApp.auth().signOut()
		});
		createUserApp.delete()
	}
}
