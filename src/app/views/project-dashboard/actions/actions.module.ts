import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@bmc-shared/shared.module';

import { ActionsRoutingModule } from './actions.routing';

import { ActionsComponent } from './actions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';

@NgModule({
	imports: [
		CommonModule,
		ActionsRoutingModule,
		ReactiveFormsModule,

		SharedModule
	],
	declarations: [ActionsComponent, CalendarComponent, DayComponent]
})
export class ActionsModule { }
