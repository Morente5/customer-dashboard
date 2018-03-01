import { NotificationsService } from 'angular2-notifications';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { take, map, find, tap, switchMap} from 'rxjs/operators'

import { AuthService } from './../auth/auth.service';
import { ProjectsService } from './../projects/projects.service';
import { RouterService } from './../router/router.service';

import { User } from './../../model/user'

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private authService: AuthService
	) { }

	canActivate(): Observable<boolean> {
		console.log('AuthGuard');
		return this.authService.user$.pipe(
			take(1),
			switchMap(user => Observable.of(user.emailVerified)),
		)
	}
}

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthService,
		private notificationsService: NotificationsService
	) { }

	canActivate(): Observable<boolean> {
		console.log('AdminGuard');
		return this.authService.user$.pipe(
			take(1),
			switchMap(user => Observable.of(user.access === 'admin' || user.access === 'master')),
			tap(isAdmin => {
				if (!isAdmin) {
					this.notificationsService.alert(null, 'This is only for Admin users')
					this.router.navigate([''])
				}
			})
		)
	}
}

@Injectable()
export class DashboardGuard implements CanActivate {
	constructor(
		private router: Router,
		private authService: AuthService,
		private projectsService: ProjectsService,
		private notificationsService: NotificationsService
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		console.log('DashboardGuard', next, state);
		// return this.authService.userData$
		return this.authService.user$.pipe(
			take(1),
			switchMap(user => {
				console.log(user)
				if (this.authService.user.access === 'admin' || this.authService.user.access === 'master') {
					return this.projectsService.projects$.switchMap(projects => {
						return Observable.of(projects.findIndex(project => project.id === next.params.projectID) !== -1)
					})
				}
				if (this.authService.user.emailVerified) {
					return Observable.of(
						this.authService.user.projects.hasOwnProperty(next.params.projectID) &&
						this.authService.user.projects[next.params.projectID] === true
					)
				}
				return Observable.of(false)
			}),
			tap(allowed => {
				if (!allowed) {
					this.notificationsService.alert(null, 'This is not a valid project')
					this.router.navigate([''])
				}
			})
		)
	}

}

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private authService: AuthService
	) { }

	canActivate(): Observable<boolean> {

		return this.authService.user$.pipe(
			take(1),
			switchMap(user => Observable.of(!(user && user.id)))
		)
	}

}
