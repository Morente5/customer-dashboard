import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';

import { Observable } from 'rxjs/Observable';

import { PasswordGroup, PasswordField } from '@bmc-core/model/passwords';
import { NotificationsService } from 'angular2-notifications';

@Component({
	selector: 'bmc-passwords',
	templateUrl: './passwords.component.html',
	styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {

	private projectID: string
	public passwords: PasswordGroup[]

	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService,
		private notificationsService: NotificationsService
	) { }

	ngOnInit() {
		this.route.parent.params.subscribe((params: Params) => {
			this.projectID = params['projectID'];
			this.passwords$.subscribe(passwords => {
				this.passwords = passwords.map(group => {
					if (group.groupFields) {
						group.groupFields = group.groupFields.map(field => new PasswordField(field))
					}
					return group
				})
			})
		});

	}

	private get passwords$(): Observable<PasswordGroup[]> {
		return this.projectService.passwords$(this.projectID)
	}

	public hasCopied(fieldName): void {
		this.notificationsService.success(`Campo: ${fieldName}`, 'Copiado al portapapeles')
	}

}
