import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RouterService } from '../../../services/router/router.service';
import { WindowService } from '../../../services/window/window.service';

import { AuthService } from '../../../services/auth/auth.service';
import { ProjectsService } from '../../../services/projects/projects.service';

// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/map';

@Component({
	selector: 'bmc-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	@Input() opened: boolean
	@Output() onSelectProject = new EventEmitter()
	@Input() projects$

	constructor(
		public routerService: RouterService,
		private windowService: WindowService,
		public projectsService: ProjectsService
	) { }

	ngOnInit() {
	}

	public select(project: string): void {
		this.onSelectProject.emit()
	}

	public keys(obj: Object): string[] {
		return Object.keys(obj)
	}

	public getProject(key) {
		return this.projectsService.getProject(key)
	}

}
