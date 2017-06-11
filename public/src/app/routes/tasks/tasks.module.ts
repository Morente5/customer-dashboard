import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
	imports: [
		CommonModule,
		TasksRoutingModule
	],
	declarations: [TasksComponent, CalendarComponent]
})
export class TasksModule { }
