import { Component, OnInit } from '@angular/core';

import { SafeResourceUrl } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './../services/project.service';
import { Project } from '@bmc-core/model/project';

@Component({
	selector: 'bmc-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

	url: SafeResourceUrl
	project: Project

	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project

		this.projectService.analyticsUrl$(this.project.id)
			.subscribe(url => this.url = url)

	}

}
