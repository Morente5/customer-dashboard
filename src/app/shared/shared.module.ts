import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbMenuModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';

import { MomentModule } from 'angular2-moment';

import { WidgetsModule } from './widgets/widgets.module';
import { slugify } from './tools/tools.module';

import { AuthService } from './services/auth.service';
import { RouterService } from './services/router.service';
import { WindowService } from './services/window.service';
import { TitleService } from './services/title.service';

import { AdminGuard, DashboardGuard, AuthGuard, LoginGuard } from './guards/auth-guard.service';
import { ProjectsGuard } from './guards/projects-guard.service';

// import { RolesPipe } from './pipes/user-role.pipe';
import { SectionPipe } from './pipes/section.pipe';

@NgModule({
	imports: [
		CommonModule,
		WidgetsModule,
		MomentModule
	],
	declarations: [
		SectionPipe,
		// RolesPipe
	],
	exports: [
		WidgetsModule,
		MomentModule,
		SectionPipe
		// RolesPipe
	]
})
export class SharedModule {
	static withProviders(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				AuthService,
				WindowService,
				RouterService,
				TitleService,

				AdminGuard, DashboardGuard, AuthGuard, LoginGuard, ProjectsGuard
			]
		}
	}
}
