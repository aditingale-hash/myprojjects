import { TestBed } from '@angular/core/testing';

import { SpeclizationserviceService } from './speclizationservice.service';

describe('SpeclizationserviceService', () => {
  let service: SpeclizationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeclizationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
