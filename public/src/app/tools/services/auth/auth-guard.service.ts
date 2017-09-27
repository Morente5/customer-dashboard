import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { AuthService } from 'app/tools/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	canActivate(): Observable<boolean> {
		console.log('AuthGuard#canActivate called');
		return this.authService.user$
			.take(1)
			.map(state => !!state)
			.do(authenticated => {
				if (!authenticated) {
					this.router.navigate(['login'])
				}
			})
	}

}
