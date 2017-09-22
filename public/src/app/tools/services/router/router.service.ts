import { Injectable } from '@angular/core';

import { Router, RoutesRecognized } from '@angular/router';

@Injectable()
export class RouterService {

	public router$
	public clientID
	constructor(
		private router: Router
	) {
		this.router$ = this.router.events
		this.router$.subscribe(val => {
			if (val instanceof RoutesRecognized) {
				this.clientID = val.state.root.firstChild.params['clientID']
			}
		});
	}

}
