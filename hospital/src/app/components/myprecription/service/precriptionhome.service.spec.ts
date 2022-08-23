import { TestBed } from '@angular/core/testing';

import { PrecriptionhomeService } from './precriptionhome.service';

describe('PrecriptionhomeService', () => {
  let service: PrecriptionhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecriptionhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
