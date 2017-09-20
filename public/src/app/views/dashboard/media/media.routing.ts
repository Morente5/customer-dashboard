import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from './media.component';

const routes: Routes = [
	{ path: '', component: MediaComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MediaRoutingModule { }
