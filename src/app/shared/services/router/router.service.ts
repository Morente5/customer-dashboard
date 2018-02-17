import { Injectable } from '@angular/core';

import { Router, RoutesRecognized, ActivationEnd, NavigationStart, NavigationEnd } from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RouterService {

	public router$
	public routerProjectID$: BehaviorSubject<string> = new BehaviorSubject('')
	public routerSection$: BehaviorSubject<string> = new BehaviorSubject('')
	public routerProjectID
	public routerSection
	public destinationRouterProjectID
	public destinationRouterSection
	constructor(
		private router: Router,
		private slimLoadingBarService: SlimLoadingBarService
	) {

		this.router$ = this.router.events
		this.router$
			.subscribe(val => {
				if (val instanceof RoutesRecognized) {

					this.destinationRouterProjectID = val.state.root.firstChild.params['projectID']
					if (val.state.root.firstChild.children.length && val.state.root.firstChild.children[0].url.length) {
						this.destinationRouterSection = val.state.root.firstChild.children[0].url[0].path
					} else {
						this.destinationRouterSection = undefined
					}
				}
				if (val instanceof ActivationEnd) {
					this.routerProjectID = this.destinationRouterProjectID
					this.routerProjectID$.next(this.destinationRouterProjectID)
					this.routerSection = this.destinationRouterSection
					this.routerSection$.next(this.destinationRouterSection)
				}
				if (val instanceof NavigationStart) {
					this.startLoading()
				}
				if (val instanceof NavigationEnd) {
					this.completeLoading()
				}
			});


	}

	startLoading() {
		this.slimLoadingBarService.start(() => {
			console.log('Loading complete');
		});
	}

	stopLoading() {
		this.slimLoadingBarService.stop();
	}

	completeLoading() {
		this.slimLoadingBarService.complete();
	}

}
