import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		LayoutComponent,

		TopBarComponent,
		MainContentComponent
	],
	exports: [
		LayoutComponent
	]
})
export class ComponentsModule { }
