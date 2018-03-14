import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RouterService } from '@bmc-core/services/router.service';
import { AuthService } from '@bmc-core/services/auth.service';

import { WindowService } from '@bmc-core/services/window.service';
import { NbSidebarService, NbMediaBreakpointsService, NbMediaBreakpoint } from '@nebular/theme';

@Component({
	selector: 'bmc-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@Output() selectProject = new EventEmitter()

	private windowWidth: number = this.windowService.innerWidth()
	public openedSidebar = false
	public sidebarState: 'expanded' | 'compacted' | 'collapsed'

	constructor(
		public routerService: RouterService,
		public authService: AuthService,
		private windowService: WindowService,
		private mediaBreakpointService: NbMediaBreakpointsService,
		private sidebarService: NbSidebarService
	) { }

	ngOnInit() {

	}


	public keys(obj: Object): string[] {
		return Object.keys(obj)
	}

}
