import { TestBed } from '@angular/core/testing';

import { PrecriptionService } from './precription.service';

describe('PrecriptionService', () => {
  let service: PrecriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
