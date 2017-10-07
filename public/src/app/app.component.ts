import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AuthService } from 'app/tools/services/auth/auth.service'
import { ProjectsService } from 'app/tools/services/projects/projects.service'

import { PushNotificationsService } from 'angular2-notifications';

@Component({
	selector: 'bmc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public openedSidebar: boolean

	public user: firebase.User
	public projects$: FirebaseObjectObservable<any>

	constructor(
		public authService: AuthService,
		public projectsService: ProjectsService,

		private pushNotificationsService: PushNotificationsService
	) {}
	ngOnInit() {
		// Request permission to push notifications
		this.pushNotificationsService.requestPermission()

		if (window.innerWidth >= 960) {
			this.openedSidebar = true
		} else {
			this.openedSidebar = false
		}
		this.authService.user$.subscribe(user => {
			if (user) {
				this.user = user
				this.projects$ = this.projectsService.getProjectList()
			}
		})
	}
	public stateSidebar($event) {
		this.openedSidebar = $event
	}
}
