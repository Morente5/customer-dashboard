import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WidgetsModule } from '@bmc-shared/widgets/widgets.module';

import { NbMenuModule, NbLayoutModule, NbSidebarModule, NbActionsModule, NbUserModule } from '@nebular/theme';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { SidebarProjectComponent } from './sidebar/sidebar-project/sidebar-project.component';

// import { SimpleNotificationsComponent, SimpleNotificationsModule } from 'angular2-notifications';

import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		BrowserModule,
		BrowserAnimationsModule,
		// SimpleNotificationsModule,

		WidgetsModule,

		NbLayoutModule,
		NbSidebarModule,
		NbMenuModule,
		NbActionsModule,
		NbUserModule
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
