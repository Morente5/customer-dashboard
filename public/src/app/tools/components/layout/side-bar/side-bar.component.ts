import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
	public clientes = ['cliente 1', 'cliente 2', 'cliente 3', 'cliente 4']
	constructor() { }

	ngOnInit() {
	}

}
