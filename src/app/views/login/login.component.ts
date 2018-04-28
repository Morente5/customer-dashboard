import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '@bmc-core/services/auth.service';

@Component({
	selector: 'bmc-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginFormData = { email: undefined, password: undefined, rememberMe: false }
	loginForm: NgForm

	constructor(
		public authService: AuthService,
		private notificationsService: NotificationsService,
	) {

	}

	ngOnInit() {
	}

	public signIn(): Promise<any> {
		return this.authService.signIn(this.loginFormData.email, this.loginFormData.password, this.loginFormData.rememberMe)
			.catch(error => {
				this.notificationsService.error('Sorry, We Couldn\'t Log You In', error.message)
			})
	}

}
