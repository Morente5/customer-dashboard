import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AdminProjectsService } from '@bmc-views/admin/services/admin-projects.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'bmc-admin-projects',
	templateUrl: './admin-projects.component.html',
	styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {

	public newProjectName = ''

	constructor(
		private router: Router,
		private adminProjectsService: AdminProjectsService,
		private modalService: NgbModal,
		private notificationsService: NotificationsService
	) { }

	ngOnInit() {
	}

	createProject(name: string): Promise<any> {
		return this.adminProjectsService.createProject(name)
			.then(() => {
				this.notificationsService.success('Project created', name)
			})
			.catch(error => {
				this.notificationsService.error('Error trying to create project', error.message)
			})
	}

	open(content): Promise<any> {
		return this.modalService.open(content).result
			.then(
				result => this.createProject(this.newProjectName),
				reason => { }
			);
	}

}
