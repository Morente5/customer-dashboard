import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RouterService } from '@bmc-shared/services/router/router.service';
import { AuthService } from '@bmc-shared/services/auth/auth.service';
import { ProjectsService } from '@bmc-shared/services/projects/projects.service';

import { WindowService } from '@bmc-shared/services/window/window.service';
import { NbSidebarModule, NbSidebarService, NbMediaBreakpointsService, NbMediaBreakpoint } from '@nebular/theme';

@Component({
	selector: 'bmc-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@Output() onSelectProject = new EventEmitter()

	private windowWidth: number = this.windowService.innerWidth()
	public openedSidebar = false
	public sidebarState: 'expanded' | 'compacted' | 'collapsed'

	constructor(
		public routerService: RouterService,
		public projectsService: ProjectsService,
		public authService: AuthService,
		private windowService: WindowService,
		private mediaBreakpointService: NbMediaBreakpointsService,
		private sidebarService: NbSidebarService
	) { }

	ngOnInit() {
		// console.log(this.mediaBreakpointService.getBreakpoints())

		// this.sidebarService.onToggle().subscribe(compact => {
		// 	this.sidebarState = compact ? 'compacted' : 'expanded'
		// 	console.log('compact', this.sidebarState)
		// })
		// this.sidebarService.onExpand().subscribe(expanded => {
		// 	this.sidebarState = 'expanded'
		// 	console.log('expanded', this.sidebarState)
		// })
		// this.sidebarService.onCollapse().subscribe(collapsed => {
		// 	this.sidebarState = 'collapsed'
		// 	console.log('collapsed', this.sidebarState)
		// })

		// if ( this.isDesktop ) {
		// 	this.expandSidebar()
		// } else {
		// 	this.collapseSidebar()
		// }

		// this.windowService.windowWidth$.subscribe(width => {
		// 	if (this.isDesktop && width <= this.breakpoint('lg') ) {  // From open to close below lg breakpoint
		// 		this.compactSidebar()
		// 	} else if (this.isTablet && width <= this.breakpoint('md') ) {  // From open to close below md breakpoint
		// 		this.collapseSidebar()
		// 	}
		// 	if (this.isMobile && width > this.breakpoint('md') ) {  // From close to open over md breakpoint
		// 		this.compactSidebar()
		// 	} else if (this.isTablet && width > this.breakpoint('lg') ) {  // From close to open over lg breakpoint
		// 		this.expandSidebar()
		// 	}
		// 	this.windowWidth = width
		// })
	}


	public keys(obj: Object): string[] {
		return Object.keys(obj)
	}

	// get isMobile(): boolean {
	// 	return this.windowWidth <= this.breakpoint('md')
	// }

	// get isTablet(): boolean {
	// 	return !this.isMobile && this.windowWidth <= this.breakpoint('lg')
	// }

	// get isDesktop(): boolean {
	// 	return !this.isTablet
	// }

	// private breakpoint(bp: string): number {
	// 	return this.mediaBreakpointService.getByName(bp).width
	// }

	// private collapseSidebar() {
	// 	if (this.sidebarState !== 'collapsed') {
	// 		this.sidebarService.collapse()
	// 		this.sidebarState = 'collapsed'
	// 	}
	// }

	// private expandSidebar() {
	// 	if (this.sidebarState !== 'expanded') {
	// 		this.sidebarService.expand()
	// 		this.sidebarState = 'expanded'
	// 	}
	// }

	// private compactSidebar() {
	// 	if (this.sidebarState === 'expanded') {
	// 		this.sidebarService.toggle(true)
	// 		this.sidebarState = 'compacted'
	// 	}
	// }

	// private toggleSidebar() {
	// 	if (this.sidebarState === 'expanded' && this.isMobile) {
	// 		this.sidebarService.toggle(true)
	// 		this.sidebarState = 'compacted'
	// 	}
	// 	if (this.sidebarState === 'expanded' && !this.isMobile) {
	// 		this.sidebarState = 'collapsed'
	// 	}
	// 	this.sidebarService.toggle(true)
	// }
}
