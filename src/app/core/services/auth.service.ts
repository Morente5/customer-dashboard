import { Injectable, Inject } from '@angular/core';

import { Router } from '@angular/router';

import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { PushNotificationsService } from 'ng-push';

import { User } from '@bmc-core/model/user';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class AuthService {

	public currentUser: User = null
	public currentUser$: Observable<User>
	public currentUserProjects: Project[] = []
	public currentUserProjects$: Observable<Project[]>

	public loggedInUser$: ReplaySubject<string> = new ReplaySubject()  // Hot Observable

	ready = false

	constructor(
		private router: Router,
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private pushNotificationsService: PushNotificationsService
	) {

		this.afAuth.auth.useDeviceLanguage()

		// Maps: Firebase Auth State Observable => User Observable
		this.currentUser$ = this.afAuth.authState.pipe(
			switchMap(user => {
				if (user && user.uid) {
					// Request permission to push notifications
					if (this.pushNotificationsService.isSupported()) {
						this.pushNotificationsService.requestPermission()
					}

					const path = `users/${user.uid}`
					return this.afs.doc(path).snapshotChanges()
						.map(userData => {
							const data = userData.payload.data() as User
							const id = userData.payload.id
							return new User({ id, ...data })
						})
				} else {
					return Observable.of(null)
				}
			})
		)

		this.currentUserProjects$ = this.loggedInUser$.pipe(
			// map(user => user.id),
			distinctUntilChanged(),
			switchMap(userID => {
				if (userID) {
					const projectsCollection = this.currentUser.isAdmin ?
						this.afs.collection('projects') :
						this.afs.collection('projects', ref => ref.where(`users.${userID}`, '==', true))
					return projectsCollection.snapshotChanges().map(project => {
						return project.map(p => {
							const data = p.payload.doc.data() as Project
							const id = p.payload.doc.id
							return new Project({ id, ...data })
						})
					})
				} else {
					return Observable.of([])
				}
			}),
			tap(() => this.ready = true)
		)

		this.currentUser$.subscribe(user => {
			this.currentUser = user
			if (user) {
				this.loggedInUser$.next(user.id)
			} else {
				this.loggedInUser$.next(null)
			}
		})

		this.currentUserProjects$.subscribe(projects => {
			this.currentUserProjects = projects
		})


	}

	public signIn(email: string, password: string, remember: boolean): Promise<any> {
		const persistence = remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
		return this.afAuth.auth.setPersistence(persistence)
			.then(() => {
				return this.afAuth.auth.signInWithEmailAndPassword(email, password)
			})
			.then(() => {
				this.router.navigate([''])
			})
	}

	public signOut(): Promise<any> {
		return this.afAuth.auth.signOut()
			.then(() => {
				this.router.navigate(['/login'])
			})
	}

	public setName(newName: string): Promise<any> {
		// Save name on Firebase Auth
		const p1 = this.afAuth.auth.currentUser.updateProfile({
			displayName: newName,
			photoURL: this.afAuth.auth.currentUser.photoURL
		})
		// Save name on Firestore (DB)
		 const p2 = this.afs.doc(`users/${this.currentUser.id}`).set(
			{displayName: newName},
			{merge: true}
		)
		return Promise.all([p1, p2])
	}
}
