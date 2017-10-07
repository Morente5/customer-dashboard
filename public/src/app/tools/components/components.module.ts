import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarProjectComponent } from './layout/sidebar/sidebar-project/sidebar-project.component';

import { SimpleNotificationsComponent, SimpleNotificationsModule } from 'angular2-notifications';

import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		SimpleNotificationsModule,
	],
	declarations: [
		LayoutComponent,

		TopbarComponent,
		MainComponent,
		SidebarComponent,
		SidebarProjectComponent,
	],
	exports: [
		LayoutComponent
	]
})
export class ComponentsModule { }
