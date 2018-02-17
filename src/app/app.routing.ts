import { NgModule } from '@angular/core';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

// Router Auth Guard
import { AuthGuard, LoginGuard, AdminGuard, DashboardGuard } from './shared/services/auth/auth-guard.service';

const routeBase = './views/';
const routes: Routes = [
	{
		path: '',
		loadChildren: routeBase + 'home/home.module#HomeModule'
	},
	{
		path: 'login',
		canActivate: [LoginGuard],
		loadChildren: routeBase + 'login/login.module#LoginModule'
	},
	{
		path: 'perfil',
		canActivate: [AuthGuard],
		loadChildren: routeBase + 'profile/profile.module#ProfileModule'
	},
	{
		path: 'admin',
		canActivate: [AdminGuard],
		loadChildren: routeBase + 'admin/admin.module#AdminModule'
	},
	{
		path: 'access-denied',
		loadChildren: routeBase + 'access-denied/access-denied.module#AccessDeniedModule'
	},
	{
		path: ':projectID',
		canActivate: [DashboardGuard],
		loadChildren: routeBase + 'project/project.module#ProjectModule'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
