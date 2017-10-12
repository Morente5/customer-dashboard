import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

// Root Component
import { AppComponent } from './app.component';

// All components exported by this module
import { ComponentsModule } from './tools/components/components.module';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Firebase
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Providers
import { RouterService } from './tools/services/router/router.service';
import { WindowService } from './tools/services/window/window.service';
import { AuthService } from './tools/services/auth/auth.service'
import { AdminGuard, DashboardGuard, AuthGuard, LoginGuard } from './tools/services/auth/auth-guard.service';
import { ProjectsService } from './tools/services/projects/projects.service'
import { ProjectsGuard } from './tools/services/projects/projects-guard.service';

import {
	SimpleNotificationsModule,
	PushNotificationsModule,
	NotificationsService,
	PushNotificationsService
} from 'angular2-notifications';

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
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule.enablePersistence(),
		AngularFireAuthModule,
		FormsModule,
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
		AdminGuard,
		LoginGuard,
		DashboardGuard,
		ProjectsGuard,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
