import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routeBase = 'app/views/dashboard/';
const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{
		path: 'analitica',
		loadChildren: routeBase + 'analytics/analytics.module#AnalyticsModule'
	},
	{
		path: 'acciones',
		loadChildren: routeBase + 'actions/actions.module#ActionsModule'
	},
	{
		path: 'tareas',
		loadChildren: routeBase + 'tasks/tasks.module#TasksModule'
	},
	{
		path: 'biblioteca',
		loadChildren: routeBase + 'media/media.module#MediaModule'
	},
	{
		path: 'suscripciones',
		loadChildren: routeBase + 'subscription/subscription.module#SubscriptionModule'
	},
	{
		path: 'soporte',
		loadChildren: routeBase + 'support/support.module#SupportModule'
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
