import { NgModule } from '@angular/core';

import { HomeComponent } from '@bmc-views/home/home.component';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

// Router Guards
import { AuthGuard } from '@bmc-core/guards/auth.guard';
import { AdminGuard } from '@bmc-core/guards/admin.guard';
import { ProjectGuard } from '@bmc-core/guards/project.guard';
import { LoginGuard } from '@bmc-core/guards/login.guard';

const routeBase = './views/';
const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Home'
		},
		component: HomeComponent
	},
	{
		path: 'login',
		canActivate: [LoginGuard],
		data: {
			title: 'Sign In'
		},
		loadChildren: routeBase + 'login/login.module#LoginModule'
	},
	{
		path: 'profile',
		canActivate: [AuthGuard],
		data: {
			title: 'Profile'
		},
		loadChildren: routeBase + 'profile/profile.module#ProfileModule'
	},
	{
		path: 'admin',
		canActivate: [AuthGuard, AdminGuard],
		data: {
			title: 'Admin Panel'
		},
		loadChildren: routeBase + 'admin/admin.module#AdminModule'
	},
	{
		path: ':projectID',
		canActivate: [AuthGuard, ProjectGuard],
		data: {
			title: 'Project Dashboard'
		},
		loadChildren: routeBase + 'project-dashboard/project-dashboard.module#ProjectModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
