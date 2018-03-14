import { Injectable } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentSnapshot, DocumentData } from '@firebase/firestore-types';

import { Observable } from 'rxjs/Observable';
import { map, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { WindowService } from '@bmc-shared/services/window.service';
import { Project } from '@bmc-shared/model/project';

@Injectable()
export class ProjectService {
	constructor(
		private afs: AngularFirestore,
		private sanitizer: DomSanitizer,
		private windowService: WindowService
	) { }

	public project$(projectID: string): Observable<Project> {
		if (projectID) {
			const path = `projects/${projectID}`
			return this.afs.doc(path).snapshotChanges().map(project => {
				const data = project.payload.data() as Project
				const id = project.payload.id
				return new Project({id, ...data})
			})
		}
		return Observable.of(null)
	}

	public actionsUrl$(projectID: string): Observable<SafeResourceUrl> {
		if (projectID) {
			const path = `projects/${projectID}/actions/data`
			return this.afs.doc(path).snapshotChanges().map(actionsDocument => {
				if (actionsDocument.payload.exists && actionsDocument.payload.data().hasOwnProperty('url')) {
					return this.sanitize(actionsDocument.payload.data().url)
				} else {
					return undefined
				}
			})
		}
		return Observable.of(undefined)
	}

	private urlResponsive$(urlObj$: Observable<DocumentData>): Observable<SafeResourceUrl> {
		return this.windowService.windowWidth$.pipe(
			map(width => {
				return width <= 768 ? 'mobile' : 'desktop'
			}),
			distinctUntilChanged(),
			switchMap(res => {
				if (res === 'mobile') {
					return urlObj$.map(frame => {
						if (frame && frame.hasOwnProperty('mobileUrl')) {
							return this.sanitize(frame.mobileUrl)
						} else if (frame && frame.hasOwnProperty('desktopUrl')) {
							return this.sanitize(frame.desktopUrl)
						} else {
							return undefined
						}
					})
				} else if (res === 'desktop') {
					return urlObj$.map(frame => {
						if (frame && frame.hasOwnProperty('desktopUrl')) {
							return this.sanitize(frame.desktopUrl)
						} else if (frame && frame.hasOwnProperty('mobileUrl')) {
							return this.sanitize(frame.mobileUrl)
						} else {
							return undefined
						}
					})
				}
			})
		)
	}

	public adwordsUrl$(projectID: string): Observable<SafeResourceUrl> {
		if (projectID) {
			const path = `projects/${projectID}/ad-words/data`
			const urlObj$ = this.afs.doc(path).snapshotChanges().map(adwordsDocument => {
				return adwordsDocument.payload.data()
			})
			return this.urlResponsive$(urlObj$)
		}
		return Observable.of(undefined)
	}

	public analyticsUrl$(projectID: string): Observable<SafeResourceUrl> {
		if (projectID) {
			const path = `projects/${projectID}/analytics/data`
			const urlObj$ = this.afs.doc(path).snapshotChanges().map(analyticsDocument => {
				return analyticsDocument.payload.data()
			})
			return this.urlResponsive$(urlObj$)
		}
		return Observable.of(undefined)
	}

	sanitize(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url)
	}

}
