import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RouterService } from '@bmc-shared/services/router.service';
import { WindowService } from '@bmc-shared/services/window.service';

import { AuthService } from '@bmc-shared/services/auth.service';

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
	) { }

	ngOnInit() {
	}

	public select(project: string): void {
		this.selectProject.emit()
	}

	public keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
