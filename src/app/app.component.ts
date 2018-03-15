import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';

import { Router } from '@angular/router'

import { SimpleNotificationsComponent, NotificationsService } from 'angular2-notifications';

import { AuthService } from '@bmc-core/services/auth.service'

@Component({
	selector: 'bmc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public openedSidebar: boolean

	notificationsDefaultOptions = {
		position: ['top', 'right'],
		timeOut: 3000,
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true
	}

	constructor(
		private router: Router,
		public authService: AuthService,
	) {
		console.log(
			'%c  %c ¡ATENCIÓN! %c  %c ESTA CONSOLA ES PARA DESARROLLADORES, ' +
			'CUALQUIER SCRIPT AQUÍ EJECUTADO PODRÁ BRINDAR TUS DATOS A POSIBLES ATACANTES: https://es.wikipedia.org/wiki/Self-XSS %c  ',
			'line-height:2.5em; padding: 5px 0; background-color: #205EBA',
			'line-height:2.5em; padding: 5px 0; background-color: #444; color: #ccc',
			'line-height:2.5em; padding: 5px 0; background-color: #205EBA',
			'line-height:2.5em; padding: 5px 0; background-color: #18468B; color: #fff',
			'line-height:2.5em; padding: 5px 0; background-color: #205EBA'
		)
	}
	ngOnInit() {
		if (window.innerWidth >= 960) {
			this.openedSidebar = true
		} else {
			this.openedSidebar = false
		}
	}

	public stateSidebar($event) {
		this.openedSidebar = $event
	}
}
