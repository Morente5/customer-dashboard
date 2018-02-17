import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdWordsRoutingModule } from './ad-words.routing';

import { AdWordsComponent } from './ad-words.component';

@NgModule({
	imports: [
		CommonModule,
		AdWordsRoutingModule
	],
	declarations: [AdWordsComponent]
})
export class AdWordsModule { }
