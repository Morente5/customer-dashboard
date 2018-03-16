import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, tap, take } from 'rxjs/operators';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class ProjectResolver implements Resolve<Observable<Project>> {
	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
		return this.project$(route.params.projectID).pipe(
			take(1)
		)
	}

	private project$(projectID): Observable<Project> {
		return this.projectService.project$(projectID)
	}
}
