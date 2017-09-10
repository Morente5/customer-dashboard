import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

import { TasksRoutingModule } from './tasks.routing';

import { TasksComponent } from './tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';

@NgModule({
	imports: [
		CommonModule,
		TasksRoutingModule,
		ReactiveFormsModule,
		MomentModule
	],
	declarations: [TasksComponent, CalendarComponent, DayComponent]
})
export class TasksModule { }
