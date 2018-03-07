import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { RouterService } from '@bmc-shared/services/router/router.service';
import { Project } from '@bmc-shared/model/project';

@Injectable()
export class ProjectService {
	project$: Observable<Project>
	constructor(
		private afs: AngularFirestore,
		private routerService: RouterService
	) {
		this.project$ = this.routerService.routerProjectID$.switchMap(projectID => {
			const path = `projects/${projectID}`
			if (projectID) {
				return this.afs.doc(path).snapshotChanges().map(project => {
					const data = project.payload.data() as Project
					const id = project.payload.id
					return {
						id,
						...data
					}
				})
			}
			return Observable.of(null)
		})
	}

}
