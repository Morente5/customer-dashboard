import { Injectable } from '@angular/core';

import { Router, RoutesRecognized } from '@angular/router';

@Injectable()
export class RouterService {

	public router$
	public clientID
	public section
	constructor(
		private router: Router
	) {
		this.router$ = this.router.events
		this.router$.subscribe(val => {
			if (val instanceof RoutesRecognized) {
				this.clientID = val.state.root.firstChild.params['clientID']
				if (val.state.root.firstChild.children[0].url.length) {
					this.section = val.state.root.firstChild.children[0].url[0].path
				} else {
					this.section = undefined
				}
				console.log(this.clientID, this.section)
			}
		});
	}

}
