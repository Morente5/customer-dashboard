import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { take, tap, switchMap, skipWhile, map } from 'rxjs/operators'

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
			switchMap(user => {
				if (user.isAdmin) {
					return this.authService.currentUserProjects$.pipe(
						skipWhile(projects => projects.length === 0),
						take(1),
						map(projects => !!projects.find(project => project.id === next.params.projectID))
					)
				}
				if (user.verified) {
					return of(next.params.projectID in user.projects && user.projects[next.params.projectID])
				}
				return of(false)
			}),
			take(1),
			tap(allowed => {
				if (!allowed) {
					this.notificationsService.alert('This is not a valid project')
					this.router.navigate([''])
				}
			})
		)
	}

}
