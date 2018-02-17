import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { AdminUsersService } from './../../services/users/admin-users.service';
import { User } from '../../../../shared/model/user';

import { Router } from '@angular/router'

@Component({
	selector: 'bmc-users-table',
	templateUrl: './users-table.component.html',
	styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
	settings = {
		add: {
			addButtonContent: '<i class="nb-plus"></i>',
			createButtonContent: '<i class="nb-checkmark"></i>',
			cancelButtonContent: '<i class="nb-close"></i>'
		},
		edit: {
			editButtonContent: '<i class="nb-edit"></i>',
			saveButtonContent: '<i class="nb-checkmark"></i>',
			cancelButtonContent: '<i class="nb-close"></i>'
		},
		delete: {
			deleteButtonContent: '<i class="nb-trash"></i>',
			confirmDelete: true
		},
		columns: {
			email: {
				title: 'Email',
			},
			displayName: {
				title: 'Name',
			},
			emailVerified: {
				title: 'Verified',
				filter: {
					type: 'checkbox'
				}
			},
			access: {
				title: 'Access',
				filter: {
					type: 'completer',
					config: {
						completer: {
							data: ['admin', 'author', 'reader']
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
			position: 'right'
		},
		mode: 'external'
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

	delete() {

	}

	userRowSelect() {

	}

	userDetail($event) {
		this.router.navigate(['/admin/users', $event.data.id])
	}

	onDeleteConfirm(event): void {
		if (window.confirm('Are you sure you want to delete?')) {
			event.confirm.resolve();
		} else {
			event.confirm.reject();
		}
	}

}
