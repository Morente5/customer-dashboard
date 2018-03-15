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
import { BackButtonComponent } from '@bmc-shared/widgets/back-button/back-button.component';
import { LoaderComponent } from '@bmc-shared/widgets/loader/loader.component';

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
		FrameComponent,
		BackButtonComponent,
		LoaderComponent
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

		Ng2SmartTableModule,

		FrameComponent,
		BackButtonComponent,
		LoaderComponent
	]
})
export class WidgetsModule { }
