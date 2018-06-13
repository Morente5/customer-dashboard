import { Injectable } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { RouterService } from '@bmc-core/services/router.service';
import { Observable } from 'rxjs';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class TitleService {

	title = 'CustomerDashboard'
	project: Project

	constructor(
		private routerService: RouterService,
		private browserTitle: Title
	) {
		this.title$.subscribe(title => this.title = title);
		this.project$.subscribe(project => this.project = project);

		this.renderTitle()
		this.routerService.routerProject$.subscribe(() => {
			this.browserTitle.setTitle(`${this.renderTitle()} - Customer Dashboard`)
		})
	}

	public get title$(): Observable<string> {
		return this.routerService.routerTitle$
	}

	public get project$(): Observable<Project> {
		return this.routerService.routerProject$
	}

	public renderTitle(): string {
		if (this.title === 'Project Dashboard' && this.project) {
			return this.project.name
		} else if (this.project && this.project.name) {
			return `${this.title} - ${this.project.name}`
		} else {
			return this.title
		}
	}

}
