import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordsComponent } from './passwords.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Passwords'
		},
		component: PasswordsComponent,
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
	providers: []
})
export class PasswordsRoutingModule { }
