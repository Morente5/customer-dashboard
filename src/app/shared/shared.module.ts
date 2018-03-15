import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'angular2-moment';


import { WidgetsModule } from './widgets/widgets.module';
import { slugify } from './tools/tools.module';

// import { RolesPipe } from './pipes/user-role.pipe';
import { SectionPipe } from './pipes/section.pipe';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,

		MomentModule,

		WidgetsModule,
	],
	declarations: [
		SectionPipe,
		// RolesPipe
	],
	exports: [
		CommonModule,
		FormsModule,
		RouterModule,

		MomentModule,

		WidgetsModule,

		SectionPipe
		// RolesPipe
	]
})
export class SharedModule { }
