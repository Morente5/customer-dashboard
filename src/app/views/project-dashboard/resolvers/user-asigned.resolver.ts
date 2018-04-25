import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, map, tap, take } from 'rxjs/operators';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { UserService } from '@bmc-views/project-dashboard/services/user.service';
import { User } from '@bmc-core/model/user';

@Injectable()
export class UserAssignedResolver implements Resolve<Observable<User>> {
	constructor(
		private projectService: ProjectService,
		private userService: UserService
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
		return this.userAssigned$(route.params.projectID).pipe(
			take(1)
		)
	}

	private userAssigned$(projectID): Observable<User> {
		return this.projectService.project$(projectID).pipe(
			switchMap(project => {
				return this.userService.user$(project.userAssigned)
			})
		)
	}
}
