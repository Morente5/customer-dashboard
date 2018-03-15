import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { environment } from '@bmc-environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import {
	NbThemeModule,
	NbMenuModule,
} from '@nebular/theme';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SimpleNotificationsModule } from 'angular2-notifications';
import { PushNotificationsModule } from 'ng-push';

import {
	NbSidebarService,
	NbMenuService,
	NbMediaBreakpointsService
} from '@nebular/theme';

import { PushNotificationsService } from 'ng-push';

import { NotificationsService } from 'angular2-notifications';


@NgModule({
	imports: [
		BrowserAnimationsModule,

		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule.enablePersistence(),
		AngularFireAuthModule,

		SlimLoadingBarModule.forRoot(),

		NbThemeModule.forRoot({ name: 'default' }),
		NbMenuModule.forRoot(),

		NgbModule.forRoot(),

		SimpleNotificationsModule.forRoot(),
		PushNotificationsModule,
	],
	exports: [
		AngularFireModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		SlimLoadingBarModule,
		NbThemeModule,
		NbMenuModule,
		SimpleNotificationsModule,
		PushNotificationsModule,
	]
})
export class CoreModule {
	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}
	static withProviders(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				NbSidebarService,
				NbMenuService,
				NbMediaBreakpointsService,
				PushNotificationsService,
				NotificationsService
			]
		}
	}
}
