import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@bmc-shared/shared.module';

import { PasswordsRoutingModule } from './passwords.routing';

import { PasswordsService } from './services/passwords.service';

import { PasswordsComponent } from './passwords.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordsRoutingModule,
		SharedModule
	],
	declarations: [
		PasswordsComponent
	],
	providers: [
		PasswordsService
	]
})
export class PasswordsModule { }
