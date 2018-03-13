import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { Project } from '@bmc-app/shared/model/project';

@Component({
	selector: 'bmc-project',
	templateUrl: './project-dashboard.component.html',
	styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

	projectID: string;

	project: Project

	// TODO Get from database. Externalize service.
	public dashboardMenu = {
		'analytics': {
			name: 'Analítica Web',
			icon: 'nb-bar-chart',
			color: 'success'
		},
		'ad-words': {
			name: 'Adwords',
			icon: 'nb-list',
			color: 'primary'
		},
		'actions': {
			name: 'Acciones',
			icon: 'nb-compose',
			color: 'info'
		},
		'passwords': {
			name: 'Contraseñas',
			icon: 'nb-tables',
			color: 'danger'
		},
		'support': {
			name: 'Soporte',
			icon: 'nb-gear',
			color: 'warning'
		}
	}

	constructor(
		private route: ActivatedRoute,
		public projectService: ProjectService
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.projectID = params['projectID'];
			this.project$.subscribe(project => this.project = project)
		});

	}

	get project$(): Observable<Project> {
		return this.projectService.project$(this.projectID)
	}

	keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
