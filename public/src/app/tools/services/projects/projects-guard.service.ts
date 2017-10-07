import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { ProjectsService } from 'app/tools/services/projects/projects.service';

@Injectable()
export class ProjectsGuard implements CanActivate {

	constructor(
		private projectsService: ProjectsService,
		private router: Router
	) { }

	// canActivate(): Observable<boolean> {
	// 	// console.log('ProjectsGuard#canActivate called');
	// 	// return this.projectsService.user$
	// 	// 	.take(1)
	// 	// 	.map(state => !!state)
	// 	// 	.do(authenticated => {
	// 	// 		if (!authenticated) {
	// 	// 			this.router.navigate(['login'])
	// 	// 		}
	// 	// 	})
	// }
	canActivate() {
		return true
	}

}
