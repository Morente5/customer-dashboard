import { Injectable } from '@angular/core'

import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { FirebaseApp } from 'angularfire2';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthService {

	public user$: Observable<firebase.User>
	public user: firebase.User

	public clients$: FirebaseListObservable<any[]>
	public clients: any[]

	constructor(
		private router: Router,
		private afAuth: AngularFireAuth,
		private db: AngularFireDatabase,
		private notificationsService: NotificationsService
	) {
		this.user$ = this.afAuth.authState // User Observable
		this.user$.subscribe(user => {
			this.user = user
			console.log(this.user)
		})
		this.clients$ = this.db.list('/projects')
		this.clients$.subscribe(clients => {
			this.clients = clients
			console.log(this.clients)
		})
		// this.login()
	}

	public login(email, password) {
		this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then(userInfo => {
				this.router.navigate([''])
				console.log(userInfo, this.user$)
			})
			.catch(error => {
				this.notificationsService.error('No se ha podido iniciar sesión', error.message)
				console.log('error', error)
			})
	}
	public loginWithGoogle() {
		this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
			.then(userInfo => {
				// this.router.navigate([''])
				console.log(userInfo, this.user$)
			})
			.catch(error => {
				this.notificationsService.error('No se ha podido iniciar sesión', error.message)
				console.log('error', error)
			})
	}

	public logout() {
		this.afAuth.auth.signOut()
		this.router.navigate(['/'])
	}

}
