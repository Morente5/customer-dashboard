import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@bmc-shared/shared.module';

import { AdWordsRoutingModule } from './ad-words.routing';

import { AdWordsComponent } from './ad-words.component';

@NgModule({
	imports: [
		CommonModule,
		AdWordsRoutingModule,

		SharedModule
	],
	declarations: [AdWordsComponent]
})
export class AdWordsModule { }
