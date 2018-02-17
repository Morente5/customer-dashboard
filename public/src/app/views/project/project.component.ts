import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProjectService } from './services/project.service';
import { RouterService } from './../../shared/services/router/router.service';

@Component({
	selector: 'bmc-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	constructor(
		public projectService: ProjectService,
		public routerService: RouterService,
	) { }

	ngOnInit() {

	}

}
