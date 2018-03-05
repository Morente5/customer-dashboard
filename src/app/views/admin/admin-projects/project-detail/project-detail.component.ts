
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { AdminProjectsService } from '@bmc-views/admin/services/projects/admin-projects.service';

import { AngularFirestoreDocument, Action } from 'angularfire2/firestore';
// import { RolesPipe } from '@bmc-shared/pipes/project-role.pipe';
import { Project } from '@bmc-shared/model/project';
import { ProjectsService } from '@bmc-shared/services/projects/projects.service';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import { SectionPipe } from '@bmc-shared/pipes/section.pipe';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';
import { DocumentData } from '@firebase/firestore-types';

@Component({
	selector: 'bmc-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

	project$: Observable<Project>
	projectData: Project

	projectDataForm: NgForm

	projectSections$Obj: { [name: string]: Observable<DocumentData> } = {
		analytics: undefined,
		['ad-words']: undefined,
		actions: undefined,
		passwords: undefined,
		support: undefined,
	}
	projectSectionsData: { [name: string]: any } = {
		analytics: {},
		['ad-words']: {},
		actions: {},
		passwords: {},
		support: {},
	}

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private adminProjectsService: AdminProjectsService,
		public projectsService: ProjectsService,
		private modalService: NgbModal,
		private notificationsService: NotificationsService
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

		this.project$.subscribe(project => {
			this.projectData = project

			this.sectionNames().forEach(sectionName => {
				this.projectSections$Obj[sectionName] = this.adminProjectsService.getProjectSectionDocument$(project.id, sectionName).snapshotChanges()
					.map(snapshot => snapshot.payload.data())
				this.projectSections$Obj[sectionName].subscribe(data => {
					this.projectSectionsData[sectionName] = data
				})

			});
		})

	}

	sectionNames() {
		return this.projectData.sections ? Object.keys(this.projectData.sections) : undefined
	}

	setName(): Promise<any> {
		return this.adminProjectsService.setName(this.projectData.id, this.projectData.name)
			.then(() => this.notificationsService.success('Se ha modificado el nombre correctamente', this.projectData.name))
			.catch(error => this.notificationsService.error('Se ha producido un error al modificar el nombre', error))
	}

	setSections(): Promise<any> {
		return this.adminProjectsService.setSections(this.projectData.id, this.projectData.sections)
			.then(() => this.notificationsService.success('Se han modificado las secciones del proyecto'))
			.catch(error => this.notificationsService.error('Se ha producido un error al modificar las secciones', error))
	}

	deleteProject(): Promise<any> {
		const name = this.projectData.name.slice()  // Copy it since it's going to be deleted
		return this.adminProjectsService.deleteProject(this.projectData.id)
			.then(() => {
				this.notificationsService.success('Se ha borrado el proyecto', name)
				this.router.navigate(['admin', 'projects'])
			})
			.catch(error => this.notificationsService.error('Se ha producido un error al borrar el proyect', name))
	}

	open(content): Promise<any> {
		return this.modalService.open(content).result
			.then(
				result => this.deleteProject(),
				reason => { }
			);
	}

}
