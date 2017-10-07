import { AuthService } from '../auth/auth.service';
import { Injectable, Inject } from '@angular/core'

// import { Subject } from 'rxjs/Subject'
// import { Observable } from 'rxjs/Observable'

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class ProjectsService {

	// private projectKeys$: FirebaseListObservable<any[]>
	public projects$: FirebaseObjectObservable<any>
	public projects: any[] = []
	public userId: string

	constructor(
		public authService: AuthService,
		private db: AngularFireDatabase,
	) {
		this.authService.user$.subscribe(user => {
			if (user) {
				this.userId = user.uid
				this.projects$ = this.getProjectList()
			} else {
				this.userId = null
			}
		})


	}

	getProjectList(): FirebaseObjectObservable<any> {
		if (!this.userId) {
			return
		}
		this.projects$ = this.db.object(`users/${this.userId}/projects`)
		return this.projects$
	}


	public getProject(key) {
		return this.db.object(`projects/${key}`)
	}


}
