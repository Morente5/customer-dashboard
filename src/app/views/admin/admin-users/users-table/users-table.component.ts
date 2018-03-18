import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { LocalDataSource } from 'ng2-smart-table';

import { User } from '@bmc-core/model/user';
import { AdminUsersService } from '@bmc-views/admin/services/admin-users.service';


@Component({
	selector: 'bmc-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
	settings = {
		columns: {
			email: {
				title: 'Email',
			},
			displayName: {
				title: 'Name',
			},
			access: {
				title: 'Access',
				filter: {
					type: 'completer',
					config: {
						completer: {
							data: ['admin', 'author', 'reader', 'master']
						}
					}
				}
			}
		},
		pager: {
			perPage: 10
		},
		noDataMessage: 'No data found',
		actions: {
			position: 'none'
		},
		mode: 'external',
	}

	source: Array<User>

	constructor(
		public adminUsersService: AdminUsersService,
		public router: Router
	) {
	}

	ngOnInit() {
		this.source = this.adminUsersService.users
		this.adminUsersService.users$.subscribe(users => {
			this.source = users
		})
	}

	create() {

	}

	edit() {

	}

	userRowSelect() {

	}

	userDetail($event) {
		this.router.navigate(['/admin/users', $event.data.id])
	}


}
