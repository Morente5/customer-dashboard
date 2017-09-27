import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { AuthService } from 'app/tools/services/auth/auth.service'

import { PushNotificationsService } from 'angular2-notifications';

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
	constructor(
		public router: Router,
		public authService: AuthService,
		private pushNotificationsService: PushNotificationsService
	) {}
	ngOnInit() {
		if (window.innerWidth >= 960) {
			this.openedSidebar = true
		} else {
			this.openedSidebar = false
		}
		this.pushNotificationsService.requestPermission()
		if (this.authService.user) {
			//this.router.navigate([''])
		} else {
			//this.router.navigate(['login'])
		}
	}
}
