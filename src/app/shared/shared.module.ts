import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbMenuModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';

import { WidgetsModule } from './widgets/widgets.module';
import { slugify } from './tools/tools.module';

import { AuthService } from './services/auth/auth.service';
import { ProjectsService } from './services/projects/projects.service';
import { RouterService } from './services/router/router.service';

import { WindowService } from './services/window/window.service';
import { AdminGuard, DashboardGuard, AuthGuard, LoginGuard } from './services/auth/auth-guard.service';
import { ProjectsGuard } from './services/projects/projects-guard.service';


// import { RolesPipe } from './pipes/user-role.pipe';

@NgModule({
	imports: [
		CommonModule,
		WidgetsModule,
	],
	declarations: [
		// RolesPipe
	],
	exports: [
		WidgetsModule,

		// RolesPipe
	]
})
export class SharedModule {
	static withProviders(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				AuthService,
				ProjectsService,
				WindowService,
				RouterService,

				AdminGuard, DashboardGuard, AuthGuard, LoginGuard, ProjectsGuard
			]
		}
	}
}
