import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { RouterService } from '@bmc-shared/services/router.service';
import { WindowService } from '@bmc-shared/services/window.service';

import { map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'bmc-analytics',
	templateUrl: './analytics.component.html',
	styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
	frame$: Observable<any>
	url$: Observable<SafeResourceUrl>
	sanitizedURL: SafeResourceUrl
	constructor(
		private afs: AngularFirestore,
		private routerService: RouterService,
		private sanitizer: DomSanitizer,
		public windowService: WindowService
	) { }

	ngOnInit() {
		this.frame$ = this.routerService.routerProjectID$.switchMap(projectID => {
			const path = `analytics/${projectID}`
			if (projectID) {
				return this.afs.doc(path).snapshotChanges().map(project => {
					return project.payload.data()
				})
			}
			return Observable.of(undefined)
		})

		this.url$ = this.windowService.windowWidth$.pipe(
			map(width => {
				return width <= 768 ? 'mobile' : 'desktop'
			}),
			distinctUntilChanged(),
			switchMap(res => {
				if (res === 'mobile') {
					return this.frame$.map(frame => {
						if (frame && frame.hasOwnProperty('mobile')) {
							return this.sanitizer.bypassSecurityTrustResourceUrl(frame.mobile)
						} else if (frame && frame.hasOwnProperty('desktop')) {
							return this.sanitizer.bypassSecurityTrustResourceUrl(frame.desktop)
						} else {
							return undefined
						}
					})
				} else if (res === 'desktop') {
					return this.frame$.map(frame => {
						if (frame && frame.hasOwnProperty('desktop')) {
							return this.sanitizer.bypassSecurityTrustResourceUrl(frame.desktop)
						} else if (frame && frame.hasOwnProperty('mobile')) {
							return this.sanitizer.bypassSecurityTrustResourceUrl(frame.mobile)
						} else {
							return undefined
						}
					})
				}
			})
		)
	}

	sanitize(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url)
	}
}
