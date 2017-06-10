import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './../../routes/home/home.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
	imports: [
		CommonModule,
		HomeModule,
		LayoutRoutingModule
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
export class LayoutModule { }
