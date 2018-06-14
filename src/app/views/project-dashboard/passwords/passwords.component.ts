import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PasswordsService } from '@bmc-views/project-dashboard/passwords/services/passwords.service';

import { Observable } from 'rxjs';

import { PasswordGroup, PasswordField } from '@bmc-views/project-dashboard/passwords/model/passwords';
import { Project } from '@bmc-core/model/project';
import { AuthService } from '@bmc-core/services/auth.service';

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
		public authService: AuthService,
		private passwordsService: PasswordsService
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project
		this.passwordGroups$().subscribe(passwords => {
			this.passwords = passwords
		})

	}

	private passwordGroups$(): Observable<PasswordGroup[]> {
		return this.passwordsService.passwordGroups$(this.project.id)
	}

	get editPermission(): boolean {
		return this.passwordsService.editPermission
	}

}
