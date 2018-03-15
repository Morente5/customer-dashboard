import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';

import { environment } from '@bmc-environments/environment';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);

// Root Component
import { AppComponent } from './app.component';

// All components exported by this module
import { LayoutModule } from '@bmc-layout/layout.module';

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
	],
	imports: [
		BrowserModule,

		AppRoutingModule,
		LayoutModule,

		CoreModule.withProviders(),
	],
	providers: [
		// Global Services
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
