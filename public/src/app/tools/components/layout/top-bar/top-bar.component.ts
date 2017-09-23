import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'bmc-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
	@Output() onToggleSidebar = new EventEmitter();
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
	public toggleSidebar() {
		this.onToggleSidebar.emit()
	}
}
