import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from './project-dashboard.component';

const routeBase = './';
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
		loadChildren: routeBase + 'analytics/analytics.module#AnalyticsModule'
	},
	{
		path: 'ad-words',
		data: {
			title: 'Adwords'
		},
		loadChildren: routeBase + 'ad-words/ad-words.module#AdWordsModule'
	},
	{
		path: 'actions',
		data: {
			title: 'Actions'
		},
		loadChildren: routeBase + 'actions/actions.module#ActionsModule'
	},
	{
		path: 'passwords',
		data: {
			title: 'Passwords'
		},
		loadChildren: routeBase + 'passwords/passwords.module#PasswordsModule'
	},
	{
		path: 'support',
		data: {
			title: 'Support'
		},
		loadChildren: routeBase + 'support/support.module#SupportModule'
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
