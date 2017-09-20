import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription.routing';

import { SubscriptionComponent } from './subscription.component';

@NgModule({
	imports: [
		CommonModule,
		SubscriptionRoutingModule
	],
	declarations: [SubscriptionComponent]
})
export class SubscriptionModule { }
