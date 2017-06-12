import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';

@NgModule({
	imports: [
		CommonModule,
		TasksRoutingModule
	],
	declarations: [TasksComponent, CalendarComponent, DayComponent]
})
export class TasksModule { }
