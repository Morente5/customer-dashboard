import { Component, OnInit } from '@angular/core';

// import { AdminUsersService } from './services/admin-users.service';

// import { NbCardModule } from "@nebular/theme";
import { NbRouteTabsetModule, /*NbActionsModule*/ } from '@nebular/theme';

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

	constructor(/*public adminUsersService: AdminUsersService*/) {}

	ngOnInit() {}
}
