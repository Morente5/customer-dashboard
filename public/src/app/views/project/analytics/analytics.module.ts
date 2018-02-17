import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics.routing';

import { AnalyticsComponent } from './analytics.component';

@NgModule({
	imports: [
		CommonModule,
		AnalyticsRoutingModule
	],
	declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
