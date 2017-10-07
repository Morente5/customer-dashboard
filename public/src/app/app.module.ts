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
import { WindowService } from 'app/tools/services/window/window.service';
import { AuthService } from 'app/tools/services/auth/auth.service'
import { AuthGuard } from 'app/tools/services/auth/auth-guard.service';
import { ProjectsService } from 'app/tools/services/projects/projects.service'
import { ProjectsGuard } from 'app/tools/services/projects/projects-guard.service';

import {
	SimpleNotificationsModule,
	PushNotificationsModule,
	NotificationsService,
	PushNotificationsService
} from 'angular2-notifications';

export const firebaseConfig = {
	apiKey: 'AIzaSyBpzP5Elt_aSv3KB87n_VRVvuJ7ZeXHugM',
	authDomain: 'dashboard-braun-marketing.firebaseapp.com',
	databaseURL: 'https://dashboard-braun-marketing.firebaseio.com',
	projectId: 'dashboard-braun-marketing',
	storageBucket: 'dashboard-braun-marketing.appspot.com',
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
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		ComponentsModule,

		SimpleNotificationsModule.forRoot(),
		PushNotificationsModule,
	],
	providers: [
		// Global Services
		RouterService,
		WindowService,
		AuthService,
		ProjectsService,

		NotificationsService,
		PushNotificationsService,

		AuthGuard,
		ProjectsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
