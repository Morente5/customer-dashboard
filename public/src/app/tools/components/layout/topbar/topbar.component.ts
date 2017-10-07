import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service'

import { Router } from '@angular/router'

@Component({
	selector: 'bmc-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
	@Output() onToggleSidebar = new EventEmitter();
	@Input() user;
	@Input() projects$;

	constructor(
		public authService: AuthService
	) { }

	ngOnInit() {
	}
	public toggleSidebar() {
		this.onToggleSidebar.emit()
	}
	// private loginClick(): void {
	// 	this.authService.login()
	// }
	public logoutClick(): void {
		this.authService.logout()
	}

}
