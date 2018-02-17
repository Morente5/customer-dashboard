import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RouterService } from './../../shared/services/router/router.service';
import { WindowService } from './../../shared/services/window/window.service';

import { AuthService } from './../../shared/services/auth/auth.service';
import { ProjectsService } from './../../shared/services/projects/projects.service';

import { NbMenuItem } from '@nebular/theme';


@Component({
	selector: 'bmc-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	@Input() opened: boolean
	@Output() selectProject = new EventEmitter()

	constructor(
		public routerService: RouterService,
		private windowService: WindowService,
		public projectsService: ProjectsService
	) { }

	ngOnInit() {
	}

	public select(project: string): void {
		this.selectProject.emit()
	}

	public keys(obj: Object): string[] {
		return Object.keys(obj)
	}

	// public getProject(key) {
	// 	return this.projectsService.getProject(key)
	// }

}
