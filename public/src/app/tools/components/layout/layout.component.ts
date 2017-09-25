import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ResizeService } from 'app/tools/services/resize/resize.service';

@Component({
	selector: 'bmc-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@Output() onToggleSidebar = new EventEmitter<boolean>();
	private windowWidth: number = this.resizeService.innerWidth()
	public openedSidebar: boolean
	constructor(
		private resizeService: ResizeService
	) { }

	ngOnInit() {
		if (this.windowWidth >= 960) {
			this.openSidebar()
		} else {
			this.closeSidebar()
		}

		this.resizeService.windowWidth$.subscribe(width => {
			console.log(width)
			if ( this.windowWidth >= 960 && width < 960 ) {  // From open to close below 960px
				this.closeSidebar()
			}
			if ( this.windowWidth < 960 && width >= 960 ) {  // From close to open over 960px
				this.openSidebar()
			}
			this.windowWidth = width
		})
	}

	private isMobile(): boolean {
		return this.windowWidth < 720
	}

	private openSidebar() {
		if (!this.openedSidebar) {
			this.toggleSidebar()
		}
	}
	private closeSidebar() {
		if (this.openedSidebar) {
			this.toggleSidebar()
		}
	}
	public toggleSidebar() {
		this.openedSidebar = !this.openedSidebar
		this.onToggleSidebar.emit(this.openedSidebar);
	}

	public mobileCloseSidebar() {
		if (this.isMobile()) {
			this.closeSidebar()
		}
	}
}
