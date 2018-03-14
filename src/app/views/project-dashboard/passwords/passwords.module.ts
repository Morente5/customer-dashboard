import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { SharedModule } from '@bmc-shared/shared.module';

import { PasswordsRoutingModule } from './passwords.routing';

import { PasswordsComponent } from './passwords.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordsRoutingModule,

		ClipboardModule,

		SharedModule
	],
	declarations: [PasswordsComponent]
})
export class PasswordsModule { }
