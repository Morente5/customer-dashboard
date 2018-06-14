import { AuthService } from './../../../core/services/auth.service';
import { Injectable } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentData } from '@firebase/firestore-types';

import { Observable, of } from 'rxjs';
import { map, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { WindowService } from '@bmc-core/services/window.service';
import { Project } from '@bmc-core/model/project';

@Injectable()
export class ProjectService {

	constructor(
		private afs: AngularFirestore,
		private sanitizer: DomSanitizer,
		private windowService: WindowService,
		private authService: AuthService
	) { }

	public project$(projectID: string): Observable<Project> {
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
	}

	public gDocsID$(projectID: string): Observable<string> {
		if (projectID) {
			const path = `projects/${projectID}/actions/data`
			return this.afs.doc(path).snapshotChanges().pipe(
				map(actionsDocument => {
					if (actionsDocument.payload.exists && 'ID' in actionsDocument.payload.data()) {
						return actionsDocument.payload.data()['ID']
					} else {
						return undefined
					}
				})
			)
		}
		return of(null)
	}

	private idResponsive$(idObj$: Observable<DocumentData>): Observable<string> {
		return this.windowService.windowWidth$.pipe(
			map(width => {
				return width <= 768 ? 'mobile' : 'desktop'
			}),
			distinctUntilChanged(),
			switchMap(res => {
				if (res === 'mobile') {
					return idObj$.pipe(
						map(idObj => {
							if (idObj && 'mobileID' in idObj) {
								return idObj.mobileID
							} else if (idObj && 'desktopID' in idObj) {
								return idObj.desktopID
							} else {
								return undefined
							}
						})
					)
				} else if (res === 'desktop') {
					return idObj$.pipe(
						map(idObj => {
							if (idObj && 'desktopID' in idObj) {
								return idObj.desktopID
							} else if (idObj && 'mobileID' in idObj) {
								return idObj.mobileID
							} else {
								return undefined
							}
						})
					)
				}
			})
		)
	}

	public dataStudioID$(projectID: string, type: 'ad-words' | 'analytics'): Observable<string> {
		if (projectID) {
			const path = `projects/${projectID}/${type}/data`
			const dataStudioIDObj$ = this.afs.doc(path).snapshotChanges().pipe(
				map(analyticsDocument => {
					return analyticsDocument.payload.data()
				})
			)
			return this.idResponsive$(dataStudioIDObj$)
		}
		return of(null)
	}

	public dataStudioIDObj$(projectID: string, type: 'ad-words' | 'analytics'): Observable<any> {
		if (projectID) {
			const path = `projects/${projectID}/${type}/data`
			return this.afs.doc(path).snapshotChanges().pipe(
				map(analyticsDocument => {
					return analyticsDocument.payload.data()
				})
			)
		}
		return of(null)
	}

	public setID(projectID: string, type: string, value: {ID?: string, mobileID?: string, desktopID?: string}): Promise<any> {
		// Save doc ID on Firestore (DB)
		return this.afs.doc(`projects/${projectID}/${type}/data`).set(
			value,
			{ merge: true }
		)
	}


	sanitize(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url)
	}

	get editPermission(): boolean {
		return this.authService.currentUser.isAuthor || this.authService.currentUser.isAdmin
	}

}
