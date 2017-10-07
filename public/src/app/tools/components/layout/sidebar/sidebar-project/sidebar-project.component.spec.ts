import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProjectComponent } from './sidebar-project.component';

describe('SidebarProjectComponent', () => {
	let component: SidebarProjectComponent;
	let fixture: ComponentFixture<SidebarProjectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SidebarProjectComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarProjectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
