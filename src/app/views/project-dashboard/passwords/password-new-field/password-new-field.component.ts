import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordsService } from '@bmc-views/project-dashboard/passwords/services/passwords.service';

@Component({
	selector: 'bmc-password-new-field',
	templateUrl: './password-new-field.component.html',
	styleUrls: ['./password-new-field.component.scss']
})
export class PasswordNewFieldComponent implements OnInit {

	newPasswordField: FormGroup

	@Input()
	passwordGroupId: string

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

	saveField() {
		if (this.newPasswordField.valid) {
			this.passwordsService.addPasswordField(this.projectId, this.passwordGroupId, this.newPasswordField.value)
				.then(() => this.newPasswordField.reset())
				.catch()
		}

	}

	createForm(): void {
		this.newPasswordField = this.fb.group({
			name: ['', Validators.required],
			value: ['', Validators.required],
			isPassword: false
		})
	}

}
