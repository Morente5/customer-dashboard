import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordField } from '@bmc-views/project-dashboard/passwords/model/passwords';

import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '@bmc-core/services/auth.service';
import { PasswordsService } from '@bmc-views/project-dashboard/passwords/services/passwords.service';

@Component({
	selector: 'bmc-password-field',
	templateUrl: './password-field.component.html',
	styleUrls: ['./password-field.component.scss']
})
export class PasswordFieldComponent implements OnInit {

	@Input()
	public passwordField: PasswordField
	@Input()
	public passwordGroupId: string
	@Input()
	public projectId: string

	formPasswordField: FormGroup

	public visible = false

	constructor(
		private fb: FormBuilder,
		private passwordsService: PasswordsService,
		public authService: AuthService,
		public notificationsService: NotificationsService
	) {
	}

	ngOnInit(): void {
		this.createForm()
	}

	public hasCopied(fieldName): void {
		this.notificationsService.success(`Campo: ${fieldName}`, 'Copiado al portapapeles')
	}

	public toggleVisibility(): void {
		this.visible = !this.visible
	}

	createForm(): void {
		this.formPasswordField = this.fb.group({
			name: [this.passwordField.name, Validators.required],
			value: [this.passwordField.value, Validators.required],
			isPassword: this.passwordField.isPassword
		})
	}

	editField() {
		if (this.formPasswordField.valid) {
			this.passwordsService.editPasswordField(
				this.projectId, this.passwordGroupId, this.passwordField.id, <PasswordField>this.formPasswordField.value
			)
		}
	}

	deleteField() {
		this.passwordsService.deletePasswordField(
			this.projectId, this.passwordGroupId, this.passwordField.id
		)
	}

	get editPermission(): boolean {
		return this.passwordsService.editPermission
	}


}
