import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';

@NgModule({
	imports: [
		CommonModule,
		SocialRoutingModule
	],
	declarations: [SocialComponent]
})
export class SocialModule { }
