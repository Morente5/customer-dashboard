import { TestBed, inject } from '@angular/core/testing';

import { RouterService } from './router.service';

describe('RouterService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [RouterService]
		});
	});

	it('should be created', inject([RouterService], (service: RouterService) => {
		expect(service).toBeTruthy();
	}));
});
