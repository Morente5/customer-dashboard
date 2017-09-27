import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout/layout.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

import { SimpleNotificationsComponent, SimpleNotificationsModule } from 'angular2-notifications';

import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		SimpleNotificationsModule.forRoot(),
	],
	declarations: [
		LayoutComponent,

		TopBarComponent,
		MainContentComponent,
		SideBarComponent,
	],
	exports: [
		LayoutComponent
	]
})
export class ComponentsModule { }
