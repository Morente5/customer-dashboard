import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators'

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '@bmc-core/services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthService,
		private notificationsService: NotificationsService
	) { }

	canActivate(): Observable<boolean> {
		return this.authService.currentUser$.pipe(
			take(1),
			map(user => {
				if (user.isAdmin) {
					return true
				} else if (user.verified) {
					this.notificationsService.alert('This is only for Admin users')
					return false
				} else {
					return false
				}
			}),
			tap(isAdmin => {
				if (!isAdmin) {
					this.router.navigate([''])
				}
			})
		)
	}
}
