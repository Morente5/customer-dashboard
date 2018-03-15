import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordsComponent } from './passwords.component';

const routes: Routes = [
	{
		path: '',
		component: PasswordsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PasswordsRoutingModule { }
