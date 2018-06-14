import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './../services/project.service';
import { Project } from '@bmc-core/model/project';

@Component({
	selector: 'bmc-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

	dataStudioID: string
	dataStudioObj: { ['desktopID']: string, ['mobileID']: string}
	url: SafeResourceUrl
	project: Project

	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project

		this.projectService.dataStudioID$(this.project.id, 'analytics')
			.subscribe(dataStudioID => {
				this.dataStudioID = dataStudioID
				this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://datastudio.google.com/embed/reporting/${dataStudioID}`)
			})
		this.projectService.dataStudioIDObj$(this.project.id, 'analytics')
			.subscribe(dataStudioObj => {
				this.dataStudioObj = dataStudioObj
			})
	}

	get editPermission(): boolean {
		return this.projectService.editPermission
	}

}
