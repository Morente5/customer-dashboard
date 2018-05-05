import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take, tap, switchMap } from 'rxjs/operators'

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '@bmc-core/services/auth.service';

@Injectable()
export class ProjectGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthService,
		private notificationsService: NotificationsService
	) { }

	canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
		return this.authService.currentUser$.pipe(
			take(1),
			switchMap(user => {
				if (user.isAdmin) {
					return Observable.of(!!this.authService.currentUserProjects.find(project => project.id === next.params.projectID))
				}
				if (user.verified) {
					return Observable.of(next.params.projectID in user.projects && user.projects[next.params.projectID])
				}
				return Observable.of(false)
			}),
			tap(allowed => {
				if (!allowed) {
					this.notificationsService.alert('This is not a valid project')
					this.router.navigate([''])
				}
			})
		)
	}

}
