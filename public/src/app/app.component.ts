import { Component } from '@angular/core';

@Component({
	selector: 'bmc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public openedSidebar: Boolean
	public stateSidebar($event) {
		this.openedSidebar = $event
	}
}
