import { NgModule } from '@angular/core';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

// Router Auth Guard
import { AuthGuard, LoginGuard, AdminGuard, DashboardGuard } from '@bmc-shared/services/auth/auth-guard.service';

const routeBase = './views/';
const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Home'
		},
		loadChildren: routeBase + 'home/home.module#HomeModule'
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
		canActivate: [AdminGuard],
		data: {
			title: 'Admin Panel'
		},
		loadChildren: routeBase + 'admin/admin.module#AdminModule'
	},
	{
		path: 'access-denied',
		data: {
			title: 'Access Denied'
		},
		loadChildren: routeBase + 'access-denied/access-denied.module#AccessDeniedModule'
	},
	{
		path: ':projectID',
		canActivate: [DashboardGuard],
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
