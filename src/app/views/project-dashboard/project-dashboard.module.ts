import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@bmc-shared/shared.module';

import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';

import { ProjectDashboardRoutingModule } from './project-dashboard.routing';

import { ProjectDashboardComponent } from './project-dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		ProjectDashboardRoutingModule,
		SharedModule
	],
	declarations: [
		ProjectDashboardComponent
	],
	providers: [
		ProjectService,
		UserService
	]
})
export class ProjectModule { }
