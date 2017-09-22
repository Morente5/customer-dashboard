import { NgModule } from '@angular/core';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

const routeBase = 'app/views/';
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
		path: ':clientID',
		loadChildren: routeBase + 'dashboard/dashboard.module#DashboardModule'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
