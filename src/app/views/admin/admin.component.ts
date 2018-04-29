import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	tabs = [
		{ title: 'Users', route: '/admin/users', data: {title: 'Users'} },
		{ title: 'Projects', route: '/admin/projects' }
	];
	public adminMenu = {
		'users': {
			name: 'Users',
			icon: 'nb-person',
			color: 'primary'
		},
		'projects': {
			name: 'Projects',
			icon: 'nb-compose',
			color: 'danger'
		},
	}

	constructor() {}

	ngOnInit() {}
}
