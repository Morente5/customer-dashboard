import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Observable, of, ReplaySubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { firebase } from '@firebase/app';
import { User as FirebaseUser } from 'firebase/app';

import { PushNotificationsService } from 'ng-push';
import { NotificationsService } from 'angular2-notifications';

import { User } from '@bmc-core/model/user';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class AuthService {

	public currentUser: User = null
	public currentUser$: Observable<User>
	public currentUserProjects: Project[] = []
	public currentUserProjects$: Observable<Project[]>

	public loggedInUser$: ReplaySubject<User> = new ReplaySubject()  // Hot Observable

	ready = false

	constructor(
		private router: Router,
		private afAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private pushNotificationsService: PushNotificationsService,
		private notificationsService: NotificationsService
	) {

		this.afAuth.auth.useDeviceLanguage()

		this.afs.firestore.enablePersistence().catch(err => {
			this.notificationsService.warn('You have multiple tabs opened at the same time', 'Only one tab is allowed at a time')
			console.warn(err)
		})

		// Maps: Firebase Auth State Observable => User Observable
		this.currentUser$ = this.afAuth.user.pipe(
			switchMap(firebaseUser => this.getUser$(firebaseUser))
		)

		this.currentUserProjects$ = this.loggedInUser$.pipe(
			// map(user => user.id),
			distinctUntilChanged(),
			switchMap(user => this.userProjects$(user)),
			tap(() => this.ready = true)
		)

		this.currentUser$.subscribe(user => {
			this.currentUser = user
			if (user && user.id) {
				this.loggedInUser$.next(user)
			} else {
				this.loggedInUser$.next(null)
			}
		})

		this.currentUserProjects$.subscribe(projects => {
			this.currentUserProjects = projects
		})

	}

	private userProjects$(user: User): Observable<Project[]> {
		if (user && user.id) {
			const userProjectsIDs: string[] = Object.keys(user.projects).filter(projectID => user.projects[projectID])
			if (user.isAdmin) {
				return this.afs.collection('projects')
					.snapshotChanges().pipe(
						map(projects => {
							return projects.map(project => {
								const data = project.payload.doc.data() as Project
								const id = project.payload.doc.id
								return new Project({ id, ...data })
							})
						})
					)
			} else if (user.projects && userProjectsIDs) {
				const userProjects$Array = userProjectsIDs.map(projectID => {
					return this.afs.doc(`projects/${projectID}`)
						.snapshotChanges().pipe(
							map(project => {
								const data = project.payload.data() as Project
								const id = project.payload.id
								return new Project({ id, ...data })
							})
						)
				})
				return combineLatest(userProjects$Array)
			}
		}
		return of([])
	}

	private getUser$(firebaseUser: FirebaseUser): Observable<User> {
		if (firebaseUser && firebaseUser.uid) {
			const path = `users/${firebaseUser.uid}`
			return this.afs.doc(path).snapshotChanges().pipe(
				map(userData => {
					const data = userData.payload.data() as User
					const id = userData.payload.id
					return new User({ id, ...data })
				})
			)
		} else {
			return of(null)
		}
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
			.then(() => {
				// Request permission to push notifications
				if (this.pushNotificationsService.isSupported()) {
					this.pushNotificationsService.requestPermission()
				}
			})
	}

	public signOut(): Promise<any> {
		return this.afAuth.auth.signOut()
			.then(() => {
				location.reload()
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
