import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { AuthService } from './../../../tools/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private authService: AuthService
	) { }

	canActivate(): Observable<boolean> {
		console.log('AuthGuard');
		return this.authService.authState$
			.take(1)
			.switchMap(authState => Observable.of(!!authState.uid))

	}
}

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(
		private authService: AuthService
	) { }

	canActivate(): Observable<boolean> {
		console.log('AdminGuard');
		return this.authService.userData$
			.take(1)
			.switchMap(userData => Observable.of(!!userData.roles.admin))
	}
}

@Injectable()
export class DashboardGuard implements CanActivate {
	constructor(
		private authService: AuthService
	) { }

	canActivate(): boolean {
		console.log('DashboardGuard')
		if (this.authService.userHasAccess) {
			// this.authService./*checkProjects*/
			return true
		}
		return false
	}
}

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private router: Router
	) { }

	canActivate(): Observable<boolean> {
		console.log('LoginGuard');

		return this.authService.authState$
			.take(1)
			.switchMap(authState => Observable.of(!authState))
	}

}
