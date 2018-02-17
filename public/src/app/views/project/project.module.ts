import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { ProjectService } from './services/project.service';

import { ProjectRoutingModule } from './project.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project.component';

@NgModule({
	imports: [
		CommonModule,
		ProjectRoutingModule,
		SharedModule
	],
	declarations: [
		ProjectComponent,
		DashboardComponent
	],
	providers: [
		ProjectService
	]
})
export class ProjectModule { }
