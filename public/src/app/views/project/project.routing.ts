import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routeBase = './';
const routes: Routes = [
	{
		path: '',
		component: ProjectComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
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
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectRoutingModule { }
