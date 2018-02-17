import { WindowService } from './../../../shared/services/window/window.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterService } from '../../../shared/services/router/router.service';
import { map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'bmc-ad-words',
	templateUrl: './ad-words.component.html',
	styleUrls: ['./ad-words.component.scss']
})
export class AdWordsComponent implements OnInit {
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
			const path = `ad-words/${projectID}`
			if (projectID) {
				return this.afs.doc(path).snapshotChanges().map(project => {
					return project.payload.data()
				})
			}
			return Observable.of(null)
		})

		this.url$ = this.windowService.windowWidth$.pipe(
			map(width => {
				return width <= 768 ? 'mobile' : 'desktop'
			}),
			distinctUntilChanged(),
			switchMap(res => {
				if (res === 'mobile') {
					return this.frame$.map(frame => this.sanitizer.bypassSecurityTrustResourceUrl(frame.mobile))
				} else if (res === 'desktop') {
					return this.frame$.map(frame => this.sanitizer.bypassSecurityTrustResourceUrl(frame.desktop))
				}
			})
		)
	}

	sanitize(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url)
	}
}
