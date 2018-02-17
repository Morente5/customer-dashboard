import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { UserDetailComponent } from './admin-users/user-detail/user-detail.component';
import { AdminEmptyComponent } from './admin-empty/admin-empty.component';
import { ProjectDetailComponent } from './admin-projects/project-detail/project-detail.component';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: AdminEmptyComponent,

			},
			{
				path: 'users',
				component: AdminUsersComponent,

			},
			{
				path: 'users/:userID',
				component: UserDetailComponent
			},
			{
				path: 'projects',
				component: AdminProjectsComponent
			},
			{
				path: 'projects/:projectID',
				component: ProjectDetailComponent
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
export class AdminRoutingModule { }
