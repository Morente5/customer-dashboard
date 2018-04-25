import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '@bmc-views/project-dashboard/services/project.service';

import { Observable } from 'rxjs';

import { PasswordGroup, PasswordField } from '@bmc-core/model/passwords';
import { NotificationsService } from 'angular2-notifications';
import { Project } from '@bmc-core/model/project';

@Component({
	selector: 'bmc-passwords',
	templateUrl: './passwords.component.html',
	styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {

	public project: Project
	public passwords: PasswordGroup[]

	constructor(
		private route: ActivatedRoute,
		private notificationsService: NotificationsService
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project
		this.passwords = this.route.snapshot.data.passwords
	}

	public hasCopied(fieldName): void {
		this.notificationsService.success(`Campo: ${fieldName}`, 'Copiado al portapapeles')
	}

}
