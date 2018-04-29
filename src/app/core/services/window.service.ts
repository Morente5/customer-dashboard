import { Injectable } from '@angular/core';

import { NgZone } from '@angular/core'

import { Observable, BehaviorSubject } from 'rxjs'

@Injectable()
export class WindowService {

	public windowWidth$ = new BehaviorSubject<number>(this.innerWidth())

	constructor(
		private zone: NgZone
	) {
		window.addEventListener('resize', () => {
			this.zone.run(() => {
				this.windowWidth$.next(this.innerWidth())
			});
		});
	}

	public innerWidth(): number {
		return window.innerWidth
	}

}
