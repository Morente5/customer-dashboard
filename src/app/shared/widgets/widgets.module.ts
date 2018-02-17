import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	NbRouteTabsetModule,
	NbTabsetModule,
	NbCardModule,
	NbActionsModule,
	NbUserModule,
	NbCheckboxModule
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FrameComponent } from './frame/frame.component';

@NgModule({
	imports: [
		CommonModule,

		NbRouteTabsetModule,
		NbTabsetModule,
		NbCardModule,
		NbActionsModule,
		NbUserModule,
		NbCheckboxModule,

		Ng2SmartTableModule
	],
	declarations: [
		FrameComponent
	],
	exports: [
		NbRouteTabsetModule,
		NbTabsetModule,
		NbCardModule,
		NbActionsModule,
		NbUserModule,
		NbCheckboxModule,

		Ng2SmartTableModule
	]
})
export class WidgetsModule { }
