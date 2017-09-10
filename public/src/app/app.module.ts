import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Root Component
import { AppComponent } from 'app/app.component';

// All components exported by this module
import { ComponentsModule } from 'app/tools/components/components.module';

// Routing Module
import { AppRoutingModule } from 'app/app.routing';

/**
 * The app bootstrapper module
 */
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		ComponentsModule,
	],
	providers: [
		// Global Services
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
