import { Component, OnInit } from '@angular/core';

import { AuthService } from '@bmc-core/services/auth.service';

// import { RolesPipe } from '@bmc-shared/pipes/user-role.pipe';

@Component({
	selector: 'bmc-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	displayName: string

	constructor(
		public authService: AuthService
	) { }

	ngOnInit() {
		this.displayName = this.authService.currentUser.displayName.slice()
	}

	setName() {
		this.authService.setName(this.displayName)
	}

}
