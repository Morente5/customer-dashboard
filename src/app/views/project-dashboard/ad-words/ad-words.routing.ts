import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdWordsComponent } from './ad-words.component';

const routes: Routes = [
	{ path: '', component: AdWordsComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdWordsRoutingModule { }
