import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { RouterService } from '@bmc-shared/services/router.service';

import { map, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'bmc-actions',
	templateUrl: './actions.component.html',
	styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
	url$: Observable<SafeResourceUrl>
	constructor(
		private afs: AngularFirestore,
		private routerService: RouterService,
		private sanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.url$ = this.routerService.routerProjectID$.switchMap(projectID => {
			const path = `actions/${projectID}`
			if (projectID) {
				return this.afs.doc(path).snapshotChanges().map(project => {
					if (project && project.payload.data().hasOwnProperty('url')) {
						return this.sanitizer.bypassSecurityTrustResourceUrl(project.payload.data().url)
					} else {
						return undefined
					}
				})
			}
			return undefined
		})
	}

	sanitize(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url)
	}
}
