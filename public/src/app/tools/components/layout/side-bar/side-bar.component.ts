import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
	public clientes = ['cliente 1 con un nombre larguisimo de la hostia', 'cliente 2', 'cliente 3', 'cliente 4']
	constructor() { }

	ngOnInit() {
	}

	slug(string: string): string {
		return string.toString().toLowerCase()
			.replace(/\s+/g, '-')           // Replace spaces with -
			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			.replace(/\-\-+/g, '-')         // Replace multiple - with single -
			.replace(/^-+/, '')             // Trim - from start of text
			.replace(/-+$/, '')
	}

}
