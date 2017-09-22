import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
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
	constructor() { }

	ngOnInit() {
	}
	
	keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
