import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { SharedModule } from '@bmc-shared/shared.module';

import { ProjectDashboardRoutingModule } from './project-dashboard.routing';

import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';

import { keys } from '@bmc-shared/tools/tools.module'

import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { AdWordsComponent } from './ad-words/ad-words.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { SupportComponent } from './support/support.component';

@NgModule({
	imports: [
		CommonModule,
		ProjectDashboardRoutingModule,
		SharedModule,
		ClipboardModule
	],
	declarations: [
		ProjectDashboardComponent,
		ActionsComponent,
		AdWordsComponent,
		AnalyticsComponent,
		PasswordsComponent,
		SupportComponent
	],
	providers: [
		ProjectService,
		UserService
	]
})
export class ProjectModule { }
