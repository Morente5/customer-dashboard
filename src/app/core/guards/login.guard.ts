import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators'

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '@bmc-core/services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private notificationsService: NotificationsService
	) { }

	canActivate(): Observable<boolean> {

		return this.authService.currentUser$.pipe(
			take(1),
			map(user => !(user && user.id)),
			tap(notSignedIn => {
				if (!notSignedIn) {
					this.notificationsService.alert('You are already signed in')
				}
			})
		)
	}

}
