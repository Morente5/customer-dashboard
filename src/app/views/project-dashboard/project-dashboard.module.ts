import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@bmc-shared/shared.module';

import { ProjectDashboardRoutingModule } from './project-dashboard.routing';

import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';

import { keys } from '@bmc-shared/tools/tools.module'

import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { AdWordsComponent } from './ad-words/ad-words.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SupportComponent } from './support/support.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ProjectDashboardRoutingModule,
		SharedModule
	],
	declarations: [
		ProjectDashboardComponent,
		ActionsComponent,
		AdWordsComponent,
		AnalyticsComponent,
		SupportComponent,
	],
	providers: [
		ProjectService,
		UserService
	]
})
export class ProjectModule { }
