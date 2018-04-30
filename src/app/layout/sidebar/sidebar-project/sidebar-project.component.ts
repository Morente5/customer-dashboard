import { Component, OnInit, Input } from '@angular/core';

import { Project } from '@bmc-core/model/project';
import { RouterService } from '@bmc-core/services/router.service';

import { InitialsPipe } from '@bmc-shared/pipes/initials.pipe';

@Component({
	selector: 'bmc-sidebar-project',
	templateUrl: './sidebar-project.component.html',
	styleUrls: ['./sidebar-project.component.scss']
})
export class SidebarProjectComponent implements OnInit {
	@Input() project: Project;
	@Input() opened: boolean;

	constructor(public routerService: RouterService) {}

	ngOnInit() {}

}
