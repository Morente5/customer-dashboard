import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { AdminProjectsService } from './../../services/projects/admin-projects.service';

import { AngularFirestoreDocument } from 'angularfire2/firestore';
// import { RolesPipe } from './../../../../shared/pipes/project-role.pipe';
import { Project } from '../../../../shared/model/project';
import { ProjectsService } from './../../../../shared/services/projects/projects.service';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

@Component({
	selector: 'bmc-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

	project$: Observable<Project>
	project: Project

	projectDataForm: NgForm

	constructor(
		private route: ActivatedRoute,
		private adminProjectsService: AdminProjectsService,
		public projectsService: ProjectsService
	) { }

	ngOnInit() {

		this.project$ = this.route.params.pipe(
			switchMap(params => {
				const projectID = params['projectID'];
				return this.adminProjectsService.getProjectDocument$(projectID).snapshotChanges()
			}),
			map(project => {
				const data = project.payload.data() as Project
				const id = project.payload.id
				return {
					id,
					...data
				}
			})
		)

		this.project$.subscribe(project => this.project = project)

	}

	save() {
		console.log('save')
	}

}
