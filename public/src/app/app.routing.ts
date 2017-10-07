import { NgModule } from '@angular/core';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

// Router Auth Guard
import { AuthGuard } from './tools/services/auth/auth-guard.service';

const routeBase = './views/';
const routes: Routes = [
	{
		path: '',
		loadChildren: routeBase + 'home/home.module#HomeModule'
	},
	{
		path: 'perfil',
		loadChildren: routeBase + 'profile/profile.module#ProfileModule'
	},
	{
		path: 'login',
		loadChildren: routeBase + 'login/login.module#LoginModule'
	},
	{
		path: 'admin',
		canActivate: [AuthGuard],
		loadChildren: routeBase + 'admin/admin.module#AdminModule'
	},
	{
		path: ':clientID',
		loadChildren: routeBase + 'dashboard/dashboard.module#DashboardModule'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
