import { TestBed } from '@angular/core/testing';

import { GetallAppointService } from './getall-appoint.service';

describe('GetallAppointService', () => {
  let service: GetallAppointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallAppointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
