import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordsService } from '@bmc-views/project-dashboard/passwords/services/passwords.service';

@Component({
	selector: 'bmc-password-new-group',
	templateUrl: './password-new-group.component.html',
	styleUrls: ['./password-new-group.component.scss']
})
export class PasswordNewGroupComponent implements OnInit {

	newPasswordGroup: FormGroup

	@Input()
	projectId: string

	constructor(
		private fb: FormBuilder,
		private passwordsService: PasswordsService
	) {
		this.createForm()
	}

	ngOnInit() {
	}

	saveGroup() {
		if (this.newPasswordGroup.valid) {
			this.passwordsService.addPasswordGroup(this.projectId, this.newPasswordGroup.value.groupName)
				.then(() => this.newPasswordGroup.reset())
				.catch()
		}

	}

	createForm(): void {
		this.newPasswordGroup = this.fb.group({
			groupName: ['', Validators.required]
		})
	}

}
