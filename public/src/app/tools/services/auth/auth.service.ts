import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {

	private user: Observable<firebase.User>
	private userID: Observable<firebase.User>
	private items: FirebaseListObservable<any[]>;
	private createUserApp

	constructor(
		private afAuth: AngularFireAuth,
		private db: AngularFireDatabase
	) {
		this.user = this.afAuth.authState
		this.userID = this.afAuth.idToken
		const ref = this.db.database.ref('/test')
		this.items = this.db.list('/test')
		this.logout()
		this.login()
		console.log(this.items)
		const firebaseConfig = {
		  apiKey: "AIzaSyBpzP5Elt_aSv3KB87n_VRVvuJ7ZeXHugM",
		  authDomain: "dashboard-braun-marketing.firebaseapp.com",
		  databaseURL: "https://dashboard-braun-marketing.firebaseio.com",
		  projectId: "dashboard-braun-marketing",
		  storageBucket: "dashboard-braun-marketing.appspot.com",
		  messagingSenderId: "774638353867"
		};
		this.createUserApp = firebase.initializeApp(firebaseConfig, "createUserApp");
	}
	
	login() {
  	this.afAuth.auth.signInWithPopup(
  		new firebase.auth.GoogleAuthProvider()
  	).then(
  		userInfo => console.log(userInfo)
  	).catch(
  		error => console.log('error', error)
  	)
	}

	logout() {
	  this.afAuth.auth.signOut()
	}
	
	createUser(em, pwd) {
		

		this.createUserApp.auth().createUserWithEmailAndPassword(em, pwd).then(firebaseUser => {
	    console.log("User " + firebaseUser.uid + " created successfully!");
	    //I don't know if the next statement is necessary 
	    this.createUserApp.auth().signOut();
		});
	}

}
