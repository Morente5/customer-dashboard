import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing';

import { AdminComponent } from './admin.component';

@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	declarations: [AdminComponent]
})
export class AdminModule { }
