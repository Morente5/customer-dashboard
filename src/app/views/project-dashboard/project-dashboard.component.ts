import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { Project } from '@bmc-core/model/project';

import { keys } from '@bmc-shared/tools/tools.module';

@Component({
	selector: 'bmc-project',
	templateUrl: './project-dashboard.component.html',
	styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

	projectID: string;

	project: Project

	public dashboardMenu = {
		'analytics': {
			icon: 'nb-bar-chart',
			color: 'success'
		},
		'ad-words': {
			icon: 'nb-list',
			color: 'primary'
		},
		'actions': {
			icon: 'nb-compose',
			color: 'info'
		},
		'passwords': {
			icon: 'nb-tables',
			color: 'danger'
		},
		'support': {
			icon: 'nb-gear',
			color: 'warning'
		}
	}

	public dashboardNames = keys(this.dashboardMenu)

	constructor(
		private route: ActivatedRoute,
		public projectService: ProjectService
	) { }

	ngOnInit() {

		this.route.params.pipe(
			map((params: Params) => params['projectID']),
			switchMap(projectID => this.project$(projectID))
		).subscribe(project => this.project = project)

	}

	private project$(projectID): Observable<Project> {
		return this.projectService.project$(projectID)
	}

}
