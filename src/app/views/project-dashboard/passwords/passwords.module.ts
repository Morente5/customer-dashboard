import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@bmc-shared/shared.module';

import { PasswordsRoutingModule } from './passwords.routing';

import { PasswordsService } from './services/passwords.service';

import { PasswordsComponent } from './passwords.component';
import { PasswordGroupComponent } from './password-group/password-group.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { PasswordNewFieldComponent } from './password-new-field/password-new-field.component';
import { PasswordNewGroupComponent } from './password-new-group/password-new-group.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PasswordsRoutingModule,
		SharedModule
	],
	declarations: [
		PasswordsComponent,
		PasswordGroupComponent,
		PasswordFieldComponent,
		PasswordNewFieldComponent,
		PasswordNewGroupComponent
	],
	providers: [
		PasswordsService
	]
})
export class PasswordsModule { }
