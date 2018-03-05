import { Component, OnInit } from '@angular/core';

import { AuthService } from '@bmc-shared/services/auth/auth.service';
import { ProjectsService } from '@bmc-shared/services/projects/projects.service';

@Component({
	selector: 'bmc-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		public authService: AuthService,
		public projectsService: ProjectsService
	) { }

	ngOnInit() {
	}

}
