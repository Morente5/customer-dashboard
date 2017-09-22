import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	// TODO Get from database
	public dashboardMenu = ['analitica', 'acciones', 'tareas', 'suscripciones', 'biblioteca']

	constructor( ) { }

	ngOnInit() {

	}

}
