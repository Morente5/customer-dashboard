import { Component, OnInit } from '@angular/core';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';

import { ProjectService } from './../services/project.service';
import { Project } from '@bmc-core/model/project';

@Component({
	selector: 'bmc-actions',
	templateUrl: './actions.component.html',
	styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

	gDocsID: string
	url: SafeResourceUrl
	project: Project

	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project

		this.projectService.gDocsID$(this.project.id)
			.subscribe(gDocsID => {
				this.gDocsID = gDocsID
				this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/spreadsheets/d/e/${gDocsID}/pubhtml`)
			})
	}

	get editPermission(): boolean {
		return this.projectService.editPermission
	}

}
