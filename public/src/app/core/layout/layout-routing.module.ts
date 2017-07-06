import { NgModule } from '@angular/core';

// Lazy Loading routes
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../../routes/home/home.component';

const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'tasks', loadChildren: './../../routes/tasks/tasks.module#TasksModule' },
	{ path: 'social', loadChildren: './../../routes/social/social.module#SocialModule' },
	{ path: 'resources', loadChildren: './../../routes/resources/resources.module#ResourcesModule' },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class LayoutRoutingModule { }
