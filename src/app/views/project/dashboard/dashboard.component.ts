import { Component, OnInit } from '@angular/core';

import { RouterService } from '@bmc-shared/services/router/router.service';
import { ProjectService } from '@bmc-views/project/services/project.service';

@Component({
	selector: 'bmc-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
		},
		// 'library': {
		// 	name: 'Biblioteca',
		// 	icon: 'nb-cloudy',
		// 	color: 'primary'
		// },
	}

	constructor(
		public routerService: RouterService,
		public projectService: ProjectService
	) { }

	ngOnInit() {

	}

	keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
