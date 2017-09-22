import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Root Component
import { AppComponent } from 'app/app.component';

// All components exported by this module
import { ComponentsModule } from 'app/tools/components/components.module';

// Routing Module
import { AppRoutingModule } from 'app/app.routing';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Providers
import { RouterService } from 'app/tools/services/router/router.service';

export const firebaseConfig = {
	apiKey: 'AIzaSyBpzP5Elt_aSv3KB87n_VRVvuJ7ZeXHugM',
	authDomain: 'dashboard-braun-marketing.firebaseapp.com',
	databaseURL: 'https://dashboard-braun-marketing.firebaseio.com/',
	storageBucket: 'your-domain-name.appspot.com',
	messagingSenderId: '774638353867'
};

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
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		ComponentsModule,
	],
	providers: [
		// Global Services
		RouterService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
