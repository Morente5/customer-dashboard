import { Injectable } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, ActivatedRoute, Params } from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter, map, tap, mergeMap } from 'rxjs/operators';

@Injectable()
export class RouterService {

	public routerTitle$: BehaviorSubject<string> = new BehaviorSubject('');
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private slimLoadingBarService: SlimLoadingBarService,
	) {
		this.router.events.pipe(
			filter(event => event instanceof NavigationStart),
			tap(() => this.startLoading()),
			map(() => this.router.routerState.root),
		).subscribe(event => {
			console.log('start', event)
		})

		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			tap(() => this.completeLoading()),
			map(() => this.activatedRoute),
			map((route) => {
				while (route.firstChild) {
					route = route.firstChild
				}
				console.log('route', route)
				return route
			}),
			filter((route) => route.outlet === 'primary'),
			mergeMap((route) => route.data),
		).subscribe(event => {
			console.log('end', event)
			this.routerTitle$.next(event.title)
		})

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
