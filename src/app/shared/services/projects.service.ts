import { Injectable } from '@angular/core'

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, distinctUntilChanged } from 'rxjs/operators'

import { AuthService } from '@bmc-shared/services/auth.service';
import { Project } from '@bmc-shared/model/project'

@Injectable()
export class ProjectsService {

	private projectsId$: Observable<string[]>
	public projects$: Observable<Project[]>

	constructor(
		public authService: AuthService,
		private afs: AngularFirestore
	) {

		this.projects$ = this.authService.loggedInUser$.pipe(
			distinctUntilChanged(),
			switchMap(userId => {
				if (userId) {
					const projectsCollection = (this.authService.user.access === 'admin' || this.authService.user.access === 'master') ?
						this.afs.collection('projects') :
						this.afs.collection('projects', ref => ref.where(`users.${userId}`, '==', true))
					return projectsCollection.snapshotChanges().map(project => {
						return project.map(p => {
							const data = p.payload.doc.data() as Project
							const id = p.payload.doc.id
							return {
								id,
								...data
							}
						})
					})
				} else {
					return Observable.of(null)
				}
			})
		)

	}

}
