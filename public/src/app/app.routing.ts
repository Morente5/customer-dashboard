import { NgModule } from '@angular/core';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

const routeBase = 'app/views/';
const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: routeBase + 'home/home.module#HomeModule'
	},
	{
		path: 'tasks',
		loadChildren: routeBase + 'tasks/tasks.module#TasksModule'
	},
	{
		path: 'social',
		loadChildren: routeBase + 'social/social.module#SocialModule'
	},
	{
		path: 'resources',
		loadChildren: routeBase + 'resources/resources.module#ResourcesModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
