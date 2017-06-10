import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './core/shared/shared.module';
import { LayoutModule } from './core/layout/layout.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		LayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
