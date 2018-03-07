import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from './project-dashboard.component';

const routeBase = './';
const routes: Routes = [
	{
		path: '',
		component: ProjectDashboardComponent,
	},
	{
		path: 'analytics',
		loadChildren: routeBase + 'analytics/analytics.module#AnalyticsModule'
	},
	{
		path: 'ad-words',
		loadChildren: routeBase + 'ad-words/ad-words.module#AdWordsModule'
	},
	{
		path: 'actions',
		loadChildren: routeBase + 'actions/actions.module#ActionsModule'
	},
	{
		path: 'passwords',
		loadChildren: routeBase + 'passwords/passwords.module#PasswordsModule'
	},
	{
		path: 'support',
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
