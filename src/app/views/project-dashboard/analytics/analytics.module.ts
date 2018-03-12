import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@bmc-shared/shared.module';

import { AnalyticsRoutingModule } from './analytics.routing';

import { AnalyticsComponent } from './analytics.component';

@NgModule({
	imports: [
		CommonModule,
		AnalyticsRoutingModule,

		SharedModule
	],
	declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
