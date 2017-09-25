import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bmc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public openedSidebar: boolean
	public stateSidebar($event) {
		this.openedSidebar = $event
	}
	ngOnInit() {
		if (window.innerWidth >= 960) {
			this.openedSidebar = true
		} else {
			this.openedSidebar = false
		}
	}
}
