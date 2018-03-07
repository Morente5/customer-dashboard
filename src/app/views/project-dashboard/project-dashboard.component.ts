import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { RouterService } from '@bmc-shared/services/router/router.service';

@Component({
	selector: 'bmc-project',
	templateUrl: './project-dashboard.component.html',
	styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

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
		public projectService: ProjectService,
		public routerService: RouterService,
	) { }

	ngOnInit() {

	}

	keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
