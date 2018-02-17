import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from './../../../../shared/model/user'
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';

@Injectable()
export class AdminUsersService {
	private usersCollection: AngularFirestoreCollection<User>;
	private usersCollection$: Observable<DocumentChangeAction[]>;
	public users$: Observable<User[]>;
	public users: User[]
	constructor(
		public afAuth: AngularFireAuth,
		private afs: AngularFirestore
	) {
		// this.createUser(Math.random().toString(36).substring(2, 9) + '@hotmail.es', Math.random().toString(36).substring(7))
		this.usersCollection = afs.collection<User>('users');
		this.usersCollection$ = this.usersCollection.snapshotChanges()
		this.users$ = this.usersCollection$.map(user => {
			return user.map(u => {
				const data = u.payload.doc.data() as User
				const id = u.payload.doc.id
				return {
					id,
					...data
				}
			})
		})

		this.users$.subscribe(users => this.users = users)

	}

	getUserDocument$(id) {
		return this.afs.doc<User>(`users/${id}`)
	}
	// addItem(item: Item) {
	// 	this.itemsCollection.add(item);
	// }


	createUser(em, pwd) {
		this.afAuth.auth.createUserWithEmailAndPassword(em, pwd)
			.then(firebaseUser => {
				console.log('Creado:', firebaseUser)
				// createUserApp.auth().currentUser.sendEmailVerification()
				// createUserApp.auth().signOut()
				console.log('hola', this.afAuth.auth.currentUser)
			})
			.catch(error => {
				console.log('error:', error)
			})
		// createUserApp.delete()
	}

}
