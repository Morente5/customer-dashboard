import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { AuthService } from '@bmc-shared/services/auth/auth.service';
import { ProjectsService } from '@bmc-shared/services/projects/projects.service';
import { RouterService } from '@bmc-app/shared/services/router/router.service';

import { NbSidebarService, NbMenuItem, NbContextMenuDirective } from '@nebular/theme';

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

	adminMenu: NbMenuItem[] = [{ title: 'Profile', link: '/profile' }, { title: 'Admin Panel', link: '/admin' }, { title: 'Log out' }];
	userMenu: NbMenuItem[] = [{ title: 'Profile', link: '/profile' }, { title: 'Log out' }];

	title: string;

	constructor(
		private sidebarService: NbSidebarService,
		public authService: AuthService,
		public projectsService: ProjectsService,
		public routerService: RouterService,
		private router: Router
	) {	}

	ngOnInit() {
		// this.routerService. .subscribe(pepe => this.title = pepe);
		this.routerService.routerTitle$.subscribe(title => this.title = title)
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
