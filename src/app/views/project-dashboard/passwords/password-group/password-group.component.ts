import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { AuthService } from '@bmc-core/services/auth.service';

import { PasswordsService } from '@bmc-views/project-dashboard/passwords/services/passwords.service';

import { PasswordGroup, PasswordField } from '@bmc-views/project-dashboard/passwords/model/passwords';

@Component({
	selector: 'bmc-password-group',
	templateUrl: './password-group.component.html',
	styleUrls: ['./password-group.component.scss']
})
export class PasswordGroupComponent implements OnInit {

	@Input()
	passwordGroup: PasswordGroup
	@Input()
	projectId: string

	formPasswordGroup: FormGroup

	groupFields: PasswordField[]

	public groupFields$: Observable<PasswordField[]>

	constructor(
		private fb: FormBuilder,
		private passwordsService: PasswordsService,
		public authService: AuthService
	) {
	}

	ngOnInit() {
		this.createForm()
		this.groupFields$ = this.passwordsService.passwordFields$(this.projectId, this.passwordGroup.id)
		this.groupFields$.subscribe(fields => {
			this.groupFields = fields
		})

	}

	deleteGroup(): Promise<any> {
		return this.passwordsService.deletePasswordGroup(this.projectId, this.passwordGroup.id)
	}

	changeGroupName(): Promise<any> {
		return this.passwordsService.editPasswordGroup(this.projectId, this.passwordGroup.id, this.formPasswordGroup.value.groupName)
	}

	createForm(): void {
		this.formPasswordGroup = this.fb.group({
			groupName: [this.passwordGroup.groupName, Validators.required]
		})
	}

	get editPermission(): boolean {
		return this.passwordsService.editPermission
	}

}
