import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
	NbMenuModule,
	NbLayoutModule,
	NbSidebarModule,
	NbRouteTabsetModule,
	NbTabsetModule,
	NbCardModule,
	NbActionsModule,
	NbUserModule,
	NbCheckboxModule,
	NbContextMenuModule
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FrameComponent } from '@bmc-shared/widgets/frame/frame.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,

		NbMenuModule,
		NbLayoutModule,
		NbSidebarModule,
		NbRouteTabsetModule,
		NbTabsetModule,
		NbCardModule,
		NbActionsModule,
		NbUserModule,
		NbCheckboxModule,
		NbContextMenuModule,

		Ng2SmartTableModule
	],
	declarations: [
		FrameComponent
	],
	exports: [
		NbMenuModule,
		NbLayoutModule,
		NbSidebarModule,
		NbRouteTabsetModule,
		NbTabsetModule,
		NbCardModule,
		NbActionsModule,
		NbUserModule,
		NbCheckboxModule,
		NbContextMenuModule,

		Ng2SmartTableModule
	]
})
export class WidgetsModule { }
