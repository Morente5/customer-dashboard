import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing';

import { LoginComponent } from './login.component';

import { SharedModule } from '@bmc-shared/shared.module'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule,
		SharedModule
	],
	declarations: [LoginComponent]
})
export class LoginModule { }
