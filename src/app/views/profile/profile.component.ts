import { Component, OnInit } from '@angular/core';

import { AuthService } from '@bmc-shared/services/auth/auth.service';
import { ProjectsService } from '@bmc-shared/services/projects/projects.service';

// import { RolesPipe } from '@bmc-shared/pipes/user-role.pipe';

@Component({
	selector: 'bmc-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	displayName: string

	constructor(
		public authService: AuthService,
		public projectsService: ProjectsService
	) { }

	ngOnInit() {
		this.displayName = this.authService.user.displayName.slice()
	}

	setName() {
		this.authService.setName(this.displayName)
	}

}
