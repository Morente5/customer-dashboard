import { Component, OnInit } from '@angular/core';

// import { AdminUsersService } from './services/users/admin-users.service';

// import { NbCardModule } from "@nebular/theme";
import { NbRouteTabsetModule, /*NbActionsModule*/ } from '@nebular/theme';

@Component({
	selector: 'bmc-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	tabs = [
		{ title: 'Users', route: '/admin/users' },
		{ title: 'Projects', route: '/admin/projects' }
	];
	constructor(/*public adminUsersService: AdminUsersService*/) {}

	ngOnInit() {}
}
