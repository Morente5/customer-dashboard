import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { AuthService } from '@bmc-shared/services/auth/auth.service';
import { ProjectsService } from '@bmc-shared/services/projects/projects.service';

import { NbMenuService, NbSidebarService, NbMenuItem } from '@nebular/theme';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// import { withLatestFrom } from 'rxjs/operators';

@Component({
	selector: 'bmc-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
	@Input() sidebarState: 'expanded' | 'compacted' | 'collapsed';

	adminMenu: NbMenuItem[] = [{ title: 'Profile', link: '/perfil' }, { title: 'Admin Panel', link: '/admin' }, { title: 'Log out' }];
	userMenu: NbMenuItem[] = [{ title: 'Profile', link: '/perfil' }, { title: 'Log out' }];



	constructor(
		private sidebarService: NbSidebarService,
		public authService: AuthService,
		public projectsService: ProjectsService,
		private menuService: NbMenuService,
		private router: Router,
	) {	}

	ngOnInit() {
	}
	public toggleSidebar() {
		this.sidebarService.toggle(true);
	}

	public logoutClick(): void {
		this.authService.logout();
	}

	public homeClick(): void {
		this.router.navigate(['/']);
	}

}
