import { Injectable, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
// import { take, tap } from 'rxjs/operators'

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { NotificationsService } from 'angular2-notifications';
import { PushNotificationsService } from 'ng-push';

import { User } from '../../model/user';

@Injectable()
export class AuthService {

	// public readonly authState$: Observable<firebase.User>
	// public authState: firebase.User = null

	public user$: Observable<User>
	public user: User = null

	public loggedInUser$: ReplaySubject<string> = new ReplaySubject()  // Hot Observable

	constructor(
		private router: Router,
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private notificationsService: NotificationsService,
		private pushNotificationsService: PushNotificationsService
	) {
		this.afAuth.auth.useDeviceLanguage()

		// this.authState$ = this.afAuth.authState // User Observable

		// Maps: Firebase Auth State Observable => FireStore User Data Observable
		// this.userData$ = this.authState$
		this.user$ = this.afAuth.authState
			.switchMap(user => {
				if (user && user.uid) {
					// Request permission to push notifications
					this.pushNotificationsService.requestPermission()

					const path = `users/${user.uid}`
					return this.afs.doc(path).snapshotChanges().map(userData => {
						const data = userData.payload.data() as User
						const id = userData.payload.id
						return {
							id,
							...data
						}
					})
				} else {
					return Observable.of(null)
				}
			})


		this.user$
			.subscribe(user => {
				if (user) {
					this.user = user
					this.loggedInUser$.next(user.id)
				} else {
					this.user = null
				}
			})
	}

	// // Returns true if user is logged in
	// get authenticated(): boolean {
	// 	return this.userData$. != null
	// }

	// // Returns current user
	// get currentUser(): firebase.User {
	// 	return this.authState
	// }

	// // Returns current user UID
	// get currentUserId(): string {
	// 	return this.authenticated ? this.authState.uid : null
	// }

	// // Returns true if user has access to the app
	// get userHasAccess(): boolean {
	// 	return this.authenticated && this.userData && this.userData.emailVerified
	// }

	public login(email: string, password: string, remember: boolean) {
		const persistence = remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
		this.afAuth.auth.setPersistence(persistence).then(() => {
			this.afAuth.auth.signInWithEmailAndPassword(email, password)
				.then(userInfo => {
					this.router.navigate([''])
					// console.log(userInfo, this.authState$)
				})
				.catch(error => {
					this.notificationsService.error('Sorry, We Couldn\'t Log You In', error.message)
					// console.log('error', error)
				})
		})
	}
	public loginWithGoogle() {
		this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
			.then(userInfo => {
				this.router.navigate(['/'])
				//console.log(userInfo, this.authState$)
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
