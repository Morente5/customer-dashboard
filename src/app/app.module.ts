import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

// Root Component
import { AppComponent } from './app.component';
import { HomeComponent } from '@bmc-views/home/home.component';

// All components exported by this module
import { LayoutModule } from '@bmc-layout/layout.module';
import { SharedModule } from '@bmc-shared/shared.module';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Providers
import { CoreModule } from '@bmc-core/core.module';


/**
 * The app bootstrapper module
 */
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,

		AppRoutingModule,
		LayoutModule,
		SharedModule,

		CoreModule.withProviders(),
	],
	providers: [
		// Global Services
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
