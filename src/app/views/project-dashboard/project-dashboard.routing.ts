import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { AdWordsComponent } from './ad-words/ad-words.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { SupportComponent } from './support/support.component';

import { ProjectResolver } from '@bmc-views/project-dashboard/resolvers/project.resolver';
import { UserAssignedResolver } from '@bmc-views/project-dashboard/resolvers/user-asigned.resolver';
import { PasswordsResolver } from '@bmc-views/project-dashboard/resolvers/passwords.resolver';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Project Dashboard'
		},
		component: ProjectDashboardComponent,
	},
	{
		path: 'analytics',
		data: {
			title: 'Analytics'
		},
		component: AnalyticsComponent,
	},
	{
		path: 'ad-words',
		data: {
			title: 'Adwords'
		},
		component: AdWordsComponent,
	},
	{
		path: 'actions',
		data: {
			title: 'Actions'
		},
		component: ActionsComponent,
	},
	{
		path: 'passwords',
		data: {
			title: 'Passwords'
		},
		component: PasswordsComponent,
		resolve: {
			project: ProjectResolver,
			passwords: PasswordsResolver
		}
	},
	{
		path: 'support',
		data: {
			title: 'Support'
		},
		component: SupportComponent,
		resolve: {
			project: ProjectResolver,
			userAssigned: UserAssignedResolver
		}
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [
		ProjectResolver,
		UserAssignedResolver,
		PasswordsResolver
	]
})
export class ProjectDashboardRoutingModule { }
