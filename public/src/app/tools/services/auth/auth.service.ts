import { Injectable, Inject } from '@angular/core'

import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { NotificationsService } from 'angular2-notifications';

import { User } from '../../interfaces/user';

@Injectable()
export class AuthService {

	public readonly authState$: Observable<firebase.User>
	public authState: firebase.User = null

	public userData$: Observable<User>
	public userData: User = null

	constructor(
		private router: Router,
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private notificationsService: NotificationsService
	) {
		// this.afAuth.auth.createUserWithEmailAndPassword('test@test.com', 'testest')
		this.authState$ = this.afAuth.authState // User Observable

		// On the first time
		this.authState$
			.take(1)
			.do(user => {
				console.log('Auth changes 1 TIME: ', user)
				if (user) {
					this.router.navigate([''])
				}
			}).subscribe()

		// Maps: Firebase Auth State Observable => FireStore User Data Observable
		this.userData$ = this.authState$.switchMap(user => {
				if (user) {
					console.log('User 👍: ', user)
					this.authState = user
					return this.afs.doc<User>(`users/${this.currentUserId}`).valueChanges()
				} else {
					console.log('User 👎: ', user)
					this.authState = null
					return Observable.of(null)
				}
			})


		this.userData$
			.subscribe(userData => {
				this.userData = userData
				console.log('UserData changes: ', this.userData)
			})
	}

	// Returns true if user is logged in
	get authenticated(): boolean {
		return this.authState != null
	}

	// Returns current user
	get currentUser(): firebase.User {
		return this.authState
	}

	// Returns current user UID
	get currentUserId(): string {
		return this.authenticated ? this.authState.uid : null
	}

	// Returns true if user has access to the app
	get userHasAccess(): boolean {
		return this.authenticated && this.userData && this.userData.emailVerified && this.userData.roles.reader
	}

	// Returns true if user is reader
	get currentUserIsReader(): boolean {
		return this.userHasAccess
	}
	// Returns true if user is author
	get currentUserIsAuthor(): boolean {
		return this.userHasAccess && this.userData.roles.author
	}
	// Returns true if user is admin
	get currentUserIsAdmin(): boolean {
		return this.userHasAccess && this.userData.roles.admin
	}

	public login(email, password) {
		this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then(userInfo => {
				this.router.navigate([''])
				console.log(userInfo, this.authState$)
			})
			.catch(error => {
				this.notificationsService.error('No se ha podido iniciar sesión', error.message)
				console.log('error', error)
			})
	}
	public loginWithGoogle() {
		this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
			.then(userInfo => {
				this.router.navigate(['/'])
				console.log(userInfo, this.authState$)
			})
			.catch(error => {
				this.notificationsService.error('No se ha podido iniciar sesión', error.message)
				console.log('error', error)
			})
	}

	public logout() {
		this.afAuth.auth.signOut().then(() => {
			this.router.navigate(['/login'])
		})
	}

}
