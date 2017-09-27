import { Injectable } from '@angular/core';

import { NgZone } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WindowService {

	public windowWidth$ = new BehaviorSubject<number>(this.innerWidth())

	constructor(
		private zone: NgZone
	) {
		window.addEventListener('resize', event => {
			zone.run(() => {
				this.windowWidth$.next(this.innerWidth())
			});
		});
	}

	public innerWidth(): number {
		return window.innerWidth
	}

}
