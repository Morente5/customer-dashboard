import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Project } from '../../../../shared/model/project';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminProjectsService {
	private projectsCollection: AngularFirestoreCollection<Project>;
	private projectsCollection$: Observable<DocumentChangeAction[]>;
	public projects$: Observable<Project[]>;
	public projects: Project[]

	constructor(private afs: AngularFirestore) {
		this.projectsCollection = afs.collection<Project>('projects');
		this.projectsCollection$ = this.projectsCollection.snapshotChanges()
		this.projects$ = this.projectsCollection$.map(projects => {
			return projects.map(u => {
				const data = u.payload.doc.data() as Project
				const id = u.payload.doc.id
				return {
					id,
					...data
				}
			})
		})

		this.projects$.subscribe(projects => this.projects = projects)
	}

	getProjectDocument$(id) {
		return this.afs.doc<Project>(`projects/${id}`)
	}


}
