import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile.routing';

import { ProfileComponent } from './profile.component';

import { SharedModule } from './../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		ProfileRoutingModule,
		FormsModule,

		SharedModule
	],
	declarations: [
		ProfileComponent
	]
})
export class ProfileModule { }
