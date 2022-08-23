import { TestBed } from '@angular/core/testing';

import { SpeclizationServiceService } from './speclization-service.service';

describe('SpeclizationServiceService', () => {
  let service: SpeclizationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeclizationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
