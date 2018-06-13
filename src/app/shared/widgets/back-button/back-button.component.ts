import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'bmc-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

	@Input() route: string[];
	@Input() title: string;

	constructor() { }

	ngOnInit() {
	}

	get parsedRoute() {
		return `/${this.route.join('/')}`
	}

}
