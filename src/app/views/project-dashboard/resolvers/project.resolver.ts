import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class ProjectResolver implements Resolve<Observable<Project>> {
	constructor(
		private projectService: ProjectService
	) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Project> {
		return this.project$(route.params.projectID).pipe(
			take(1)
		)
	}

	private project$(projectID): Observable<Project> {
		return this.projectService.project$(projectID)
	}
}
