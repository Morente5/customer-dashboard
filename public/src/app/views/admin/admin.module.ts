import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';


import { UsersService } from './services/users/users.service';

@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	providers: [
		UsersService
	],
	declarations: [AdminComponent]
})
export class AdminModule { }
