import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../tools/services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'bmc-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginFormData = {email: '', password: ''}
	loginForm: NgForm
	constructor(
		private authService: AuthService,
		private router: Router
	) {

	}

	ngOnInit() {
	}

	private loginWithGoogle(): void {
		this.authService.loginWithGoogle()
	}

	public onSubmit() {
		console.log(this.loginFormData)
		this.authService.login(this.loginFormData.email, this.loginFormData.password)
	}

}
