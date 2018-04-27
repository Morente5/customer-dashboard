import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '@bmc-views/project-dashboard/services/user.service';

import { Observable } from 'rxjs';

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
		private route: ActivatedRoute,
		private userService: UserService,
	) { }

	ngOnInit() {
		this.project = this.route.snapshot.data.project

		this.userAssigned$(this.project.userAssigned).subscribe(user => {
			this.userAssigned = user
		})
	}

	private userAssigned$(projectID): Observable<User> {
		return this.userService.user$(projectID)
	}

	sendEmail(email: string) {
		return `mailto:${email}`
	}

}
