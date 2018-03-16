import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '@bmc-core/model/user';
import { Project } from '@bmc-core/model/project';

@Component({
	selector: 'bmc-support',
	templateUrl: './support.component.html',
	styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

	public project: Project
	public userAssigned: User

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project
		this.userAssigned = this.route.snapshot.data.userAssigned
	}

	sendEmail(email: string) {
		return `mailto:${email}`
	}

}
