import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '@bmc-shared/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		SharedModule
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
