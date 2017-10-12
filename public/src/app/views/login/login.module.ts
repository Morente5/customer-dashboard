import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login.routing';

import { LoginComponent } from './login.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule
	],
	declarations: [LoginComponent]
})
export class LoginModule { }
