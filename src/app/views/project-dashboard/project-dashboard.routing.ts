import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { AdWordsComponent } from './ad-words/ad-words.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { SupportComponent } from './support/support.component';

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
	},
	{
		path: 'support',
		data: {
			title: 'Support'
		},
		component: SupportComponent,
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectDashboardRoutingModule { }
