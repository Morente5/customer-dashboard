import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@bmc-environments/environment';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from '@bmc-core/model/user'

@Injectable()
export class AdminUsersService {

	public users$: Observable<User[]>;
	public users: User[]
	constructor(
		public afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private router: Router
	) {

		const usersCollection$ = this.afs.collection<User>('users').snapshotChanges()
		this.users$ = usersCollection$.map(user => {
			return user.map(u => {
				const data = u.payload.doc.data() as User
				const id = u.payload.doc.id
				return new User({ id, ...data })
			})
		})

		this.users$.subscribe(users => this.users = users)

	}

	getUserDocument$(id): AngularFirestoreDocument<User> {
		return this.afs.doc<User>(`users/${id}`)
	}

	createUser(em, pwd): Promise<any> {
		const createUserFirebaseApp = firebase.initializeApp(environment.firebaseConfig, 'createUser')
		return createUserFirebaseApp.auth().createUserWithEmailAndPassword(em, pwd)
			.then(firebaseUser => {
				const uid = firebaseUser.uid
				createUserFirebaseApp.auth().currentUser.sendEmailVerification()
				this.router.navigate(['admin', 'users', uid])
				createUserFirebaseApp.auth().signOut()
				createUserFirebaseApp.delete()
			})
			.catch(error => {
				createUserFirebaseApp.auth().signOut()
				createUserFirebaseApp.delete()
				throw new Error(error)
			})
	}

	public deleteUser(userID: string): Promise<any> {
		// Delete user from Firestore (DB)
		return this.afs.doc(`users/${userID}`).delete()
	}

	public setName(userID: string, newName: string): Promise<any> {
		// Save name on Firestore (DB)
		return this.afs.doc(`users/${userID}`).set(
			{ displayName: newName },
			{ merge: true }
		)
	}
	public setAccess(userID: string, access: string): Promise<any> {
		// Save access on Firestore (DB)
		return this.afs.doc(`users/${userID}`).set(
			{ access: access },
			{ merge: true }
		)
	}
	public setProjects(userID: string, projects: { [name: string]: boolean; }): Promise<any> {
		// Save projects on Firestore (DB)
		return this.afs.doc(`users/${userID}`).set(
			{ projects: projects },
			{ merge: true }
		)
	}

}
