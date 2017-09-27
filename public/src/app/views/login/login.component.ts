import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/tools/services/auth/auth.service';

@Component({
	selector: 'bmc-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		this.authService.user$.subscribe(user => {
			if (user) {
				//this.router.navigate([''])
			}
		})
	}

	ngOnInit() {
	}

	private loginWithGoogle(): void {
		this.authService.loginWithGoogle()
	}

	private onSubmit(formData) {
		if (formData.valid) {
			console.log(formData.value)
			//this.authService.login(formData.value.email, formData.value.password)
		}
	}

}
