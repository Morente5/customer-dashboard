import { NgModule } from '@angular/core';

import { SharedModule } from '@bmc-shared/shared.module';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarProjectComponent } from './sidebar/sidebar-project/sidebar-project.component';
import { FooterComponent } from './footer/footer.component';

// import { SimpleNotificationsComponent, SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		LayoutComponent,

		TopbarComponent,
		SidebarComponent,
		SidebarProjectComponent,
		FooterComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }
