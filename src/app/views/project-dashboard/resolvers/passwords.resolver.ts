import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, tap, take } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { UserService } from '@bmc-views/project-dashboard/services/user.service';
import { User } from '@bmc-core/model/user';
import { PasswordField, PasswordGroup } from '@bmc-core/model/passwords';

@Injectable()
export class PasswordsResolver implements Resolve<Observable<PasswordGroup[]>> {
	constructor(
		private projectService: ProjectService,
		private userService: UserService
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PasswordGroup[]> {

		return this.passwords$(route.params.projectID).pipe(
			tap(console.log),
			map(passwords => passwords.map(group => {
				if (group.groupFields) {
					group.groupFields = group.groupFields.map(field => new PasswordField(field))
				}
				return group
			})),
			tap(console.log),
			take(1)
		)
	}

	private passwords$(projectID): Observable<PasswordGroup[]> {
		return this.projectService.passwords$(projectID)
	}
}
