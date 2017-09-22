import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	// TODO Get from database. Externalize service.
	public dashboardMenu = {
		'analitica': {
			name: 'Analítica Web'
		},
		'acciones': {
			name: 'Acciones'
		},
		'tareas': {
			name: 'Tareas'
		},
		'suscripciones': {
			name: 'Suscripciones'
		},
		'biblioteca': {
			name: 'Biblioteca'
		},
	}

	constructor( ) { }

	ngOnInit() {

	}

	keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
