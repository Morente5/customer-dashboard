import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { slugify } from '@bmc-shared/tools/tools.module';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class AdminProjectsService {

	public projects$: Observable<Project[]>;
	public projects: Project[]

	constructor(
		private afs: AngularFirestore,
		private router: Router
	) {

		const projectsCollection$ = afs.collection<Project>('projects').snapshotChanges()
		this.projects$ = projectsCollection$.pipe(
			map(projects => {
				return projects.map(u => {
					const data = u.payload.doc.data() as Project
					const id = u.payload.doc.id
					return new Project({ id, ...data })
				})
			})
		)

		this.projects$.subscribe(projects => this.projects = projects)
	}

	getProjectDocument$(id) {
		return this.afs.doc<Project>(`projects/${id}`)
	}

	createProject(name: string): Promise<any> {
		const id = slugify(name)
		return this.afs.collection('projects').doc(id).set({
			name: name,
			sections: {
				actions: false,
				['ad-words']: false,
				analytics: false,
				passwords: false,
				support: true,
			},
			users: {}
		})
			.then(project => {
				this.router.navigate(['admin', 'projects', id])
			})
	}

	public deleteProject(projectID: string): Promise<any> {
		// Delete project from Firestore (DB)
		return this.afs.doc(`projects/${projectID}`).delete()
	}

	public setName(projectID: string, newName: string): Promise<any> {
		// Save name on Firestore (DB)
		return this.afs.doc(`projects/${projectID}`).set(
			{ name: newName },
			{ merge: true }
		)
	}

	public setSections(projectID: string, sections: { [name: string]: boolean; }): Promise<any> {
		// Save sections on Firestore (DB)
		return this.afs.doc(`projects/${projectID}`).set(
			{ sections: sections },
			{ merge: true }
		)
	}

	public setUserAssigned(projectID: string, userID: string): Promise<any> {
		// Save user assigned on Firestore (DB)
		return this.afs.doc(`projects/${projectID}`).set(
			{ userAssigned: userID },
			{ merge: true }
		)
	}


}
