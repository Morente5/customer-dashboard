import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'

@Component({
	selector: 'bmc-sidebar-project',
	templateUrl: './sidebar-project.component.html',
	styleUrls: ['./sidebar-project.component.scss']
})
export class SidebarProjectComponent implements OnInit, OnDestroy {
	@Input() project$: FirebaseListObservable<any[]>
	@Input() projectKey: string
	@Input() opened: boolean
	public project
	private subscription: Subscription
	constructor() { }

	ngOnInit() {
		console.log(this.project$.$ref)
		this.subscription = this.project$.subscribe(project => {
				this.project = project
		})
	}
	ngOnDestroy() {
		this.subscription.unsubscribe()
	}

}
