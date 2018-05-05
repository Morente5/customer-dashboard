import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { AdWordsComponent } from './ad-words/ad-words.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SupportComponent } from './support/support.component';

import { ProjectResolver } from '@bmc-views/project-dashboard/resolvers/project.resolver';

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
		resolve: {
			project: ProjectResolver
		}
	},
	{
		path: 'ad-words',
		data: {
			title: 'Adwords'
		},
		component: AdWordsComponent,
		resolve: {
			project: ProjectResolver
		}
	},
	{
		path: 'actions',
		data: {
			title: 'Actions'
		},
		component: ActionsComponent,
		resolve: {
			project: ProjectResolver
		}
	},
	{
		path: 'passwords',
		data: {
			title: 'Passwords'
		},
		loadChildren: './passwords/passwords.module#PasswordsModule',
		resolve: {
			project: ProjectResolver
		}
	},
	{
		path: 'support',
		data: {
			title: 'Support'
		},
		component: SupportComponent,
		resolve: {
			project: ProjectResolver
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
		ProjectResolver
	]
})
export class ProjectDashboardRoutingModule { }
