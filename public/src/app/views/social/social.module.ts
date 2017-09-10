import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social.routing';

import { SocialComponent } from './social.component';

@NgModule({
	imports: [
		CommonModule,
		SocialRoutingModule
	],
	declarations: [SocialComponent]
})
export class SocialModule { }
