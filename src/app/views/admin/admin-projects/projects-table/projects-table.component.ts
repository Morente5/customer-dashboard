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
			position: 'none'
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

	projectRowSelect() {

	}

	projectDetail($event) {
		this.router.navigate(['/admin/projects', $event.data.id])
	}


}
