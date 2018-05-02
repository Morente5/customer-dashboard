import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { NbSidebarService, NbMenuItem, NbMenuService } from '@nebular/theme';

import { AuthService } from '@bmc-core/services/auth.service';
import { RouterService } from '@bmc-core/services/router.service';
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
		public routerService: RouterService,
		private router: Router,
		private titleService: TitleService,
		private menuService: NbMenuService
	) { }

	ngOnInit() {
		this.title$.subscribe(title => this.title = title);
		this.project$.subscribe(project => this.project = project);

		this.menuService.onItemClick().pipe(
			filter(event => event.item.title === 'Sign Out'),
			tap(() => this.signOut())
		).subscribe()

	}

	public get title$(): Observable<string> {
		return this.routerService.routerTitle$
	}

	public get project$(): Observable<Project> {
		return this.routerService.routerProject$
	}

	public get renderTitle(): string {
		if (this.title === 'Project Dashboard' && this.project) {
			return this.project.name
		} else if (this.project && this.project.name) {
			return `${this.title} - ${this.project.name}`
		} else {
			return this.title
		}
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
