import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { filter, tap } from 'rxjs/operators';

import { NbSidebarService, NbMenuItem, NbMenuService } from '@nebular/theme';

import { AuthService } from '@bmc-core/services/auth.service';
import { TitleService } from '@bmc-core/services/title.service';

import { Project } from '@bmc-core/model/project';

@Component({
	selector: 'bmc-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
	@Input() sidebarState: 'expanded' | 'compacted' | 'collapsed'

	adminMenu: NbMenuItem[] = [
		{ title: 'Profile', link: '/profile', icon: 'nb-person' },
		{ title: 'Admin Panel', link: '/admin', icon: 'nb-gear' },
		{ title: 'Sign Out', icon: 'nb-close-circled' }
	]

	userMenu: NbMenuItem[] = [
		{ title: 'Profile', link: '/profile', icon: 'nb-person' },
		{ title: 'Sign Out', icon: 'nb-close-circled' }
	]

	title: string
	project: Project

	constructor(
		private sidebarService: NbSidebarService,
		public authService: AuthService,
		private router: Router,
		private titleService: TitleService,
		private menuService: NbMenuService
	) { }

	ngOnInit() {
		this.menuService.onItemClick().pipe(
			filter(event => event.item.title === 'Sign Out'),
			tap(() => this.signOut())
		).subscribe()

	}

	public get renderTitle(): string {
		return this.titleService.renderTitle()
	}

	public toggleSidebar(): void {
		this.sidebarService.toggle(true);
	}

	public signOut(): void {
		this.authService.signOut();
	}

	public homeClick(): void {
		this.router.navigate(['/']);
	}

}
