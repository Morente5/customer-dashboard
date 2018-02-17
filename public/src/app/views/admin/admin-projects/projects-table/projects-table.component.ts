import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { AdminProjectsService } from './../../services/projects/admin-projects.service';
import { Project } from '../../../../shared/model/project';

import { Router } from '@angular/router'

@Component({
	selector: 'bmc-projects-table',
	templateUrl: './projects-table.component.html',
	styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {

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
			name: {
				title: 'Name',
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

	source: Array<Project>

	constructor(
		public adminProjectsService: AdminProjectsService,
		public router: Router
	) {
	}

	ngOnInit() {
		this.source = this.adminProjectsService.projects
		this.adminProjectsService.projects$.subscribe(projects => {
			this.source = projects
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
		this.router.navigate(['/admin/projects', $event.data.id])
	}

	onDeleteConfirm(event): void {
		if (window.confirm('Are you sure you want to delete?')) {
			event.confirm.resolve();
		} else {
			event.confirm.reject();
		}
	}

}
