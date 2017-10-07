import { TestBed, inject } from '@angular/core/testing';

import { ProjectsGuard } from './projects-guard.service';

describe('ProjectsGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProjectsGuard]
		});
	});

	it('should be created', inject([ProjectsGuard], (service: ProjectsGuard) => {
		expect(service).toBeTruthy();
	}));
});
