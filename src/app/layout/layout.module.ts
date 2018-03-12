import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { SharedModule } from '@bmc-shared/shared.module';

import { NbMenuModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarProjectComponent } from './sidebar/sidebar-project/sidebar-project.component';
import { MainComponent } from './main/main.component';

// import { SimpleNotificationsComponent, SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		// SimpleNotificationsModule,

		SharedModule,

		NbLayoutModule,
		NbSidebarModule,
		NbMenuModule,
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
export class LayoutModule { }
