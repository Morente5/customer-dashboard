import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
// import { take, map, tap } from 'rxjs/operators'

import { ProjectsService } from '@bmc-shared/services/projects.service';

@Injectable()
export class ProjectsGuard implements CanActivate {

	constructor(
		private projectsService: ProjectsService,
		private router: Router
	) { }

	// canActivate(): Observable<boolean> {
	// 	console.log('ProjectsGuard#canActivate called');
	// 	return this.projectsService.user$.pipe(
	// 		take(1),
	// 		map(state => !!state),
	// 		tap(authenticated => {
	// 			if (!authenticated) {
	// 				this.router.navigate(['login'])
	// 			}
	// 		})
	// 	)
	// }

	canActivate() {
		return true
	}

}
