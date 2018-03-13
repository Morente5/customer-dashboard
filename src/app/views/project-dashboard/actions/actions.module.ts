import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@bmc-shared/shared.module';

import { ActionsRoutingModule } from './actions.routing';

import { ActionsComponent } from './actions.component';

@NgModule({
	imports: [
		CommonModule,
		ActionsRoutingModule,

		SharedModule
	],
	declarations: [ActionsComponent]
})
export class ActionsModule { }
