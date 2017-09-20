import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support.routing';

import { SupportComponent } from './support.component';

@NgModule({
	imports: [
		CommonModule,
		SupportRoutingModule
	],
	declarations: [SupportComponent]
})
export class SupportModule { }
