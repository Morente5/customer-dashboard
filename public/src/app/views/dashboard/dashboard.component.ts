import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'bmc-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public dashboardMenu = ['analitica', 'acciones', 'tareas', 'suscripciones', 'biblioteca']
	private clienteID$: any;
	public clienteID: any;
	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.clienteID$ = this.route.params.subscribe(params => {
			console.log(params['clienteID'])
			this.clienteID = params['clienteID']; // (+) converts string 'id' to a number

			// In a real app: dispatch action to load the details here.
		});
	}

	ngOnDestroy() {
		this.clienteID$.unsubscribe();
	}
}
