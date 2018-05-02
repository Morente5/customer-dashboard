import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

import { Router, NavigationStart, NavigationEnd, ActivatedRoute, Params } from '@angular/router';

import { Observable, of } from 'rxjs';
import { filter, map, tap, mergeMap, switchMap } from 'rxjs/operators';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Project } from '@bmc-core/model/project';

@Injectable()
export class RouterService {

	activeProject: Project
	section: string

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private slimLoadingBarService: SlimLoadingBarService,
		private afs: AngularFirestore
	) {

		this.router.events.pipe(
			filter(event => event instanceof NavigationStart),
			tap(() => this.startLoading())
		).subscribe()

		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			tap(() => this.completeLoading())
		).subscribe()

		this.routerProject$.subscribe(project => this.activeProject = project)
		this.routerSection$.subscribe(section => this.section = section)

	}

	public get routerTitle$(): Observable<string> {
		return this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			map(() => this.activatedRoute),
			map(route => {
				while (route.firstChild) {
					route = route.firstChild
				}
				return route
			}),
			filter(route => route.outlet === 'primary'),
			switchMap(route => route.data),
			map(data => data.title)
		)
	}

	public get routerProject$(): Observable<Project> {
		return this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			map(() => this.activatedRoute.firstChild),
			filter(route => route.outlet === 'primary'),
			switchMap(route => route.params),
			map(params => params['projectID']),
			switchMap(projectID => {
				if (projectID) {
					const path = `projects/${projectID}`
					return this.afs.doc(path).snapshotChanges().pipe(
						map(project => {
							const data = project.payload.data() as Project
							const id = project.payload.id
							return new Project({ id, ...data })
						})
					)
				}
				return of(null)
			})
		)
	}

	public get routerSection$(): Observable<string> {
		return this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			map(() => this.activatedRoute.root),
			map(route => {
				while (route.firstChild) {
					route = route.firstChild
				}
				return route
			}),
			filter(route => route.outlet === 'primary'),
			switchMap(route => route.data),
			map(data => data.title)
		)
	}

	startLoading() {
		this.slimLoadingBarService.start();
	}

	stopLoading() {
		this.slimLoadingBarService.stop();
	}

	completeLoading() {
		this.slimLoadingBarService.complete();
	}

}
