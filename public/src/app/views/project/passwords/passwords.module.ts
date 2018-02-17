import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsRoutingModule } from './passwords.routing';

import { PasswordsComponent } from './passwords.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordsRoutingModule
	],
	declarations: [PasswordsComponent]
})
export class PasswordsModule { }
