import { TestBed } from '@angular/core/testing';

import { GetemployeeService } from './getemployee.service';

describe('GetemployeeService', () => {
  let service: GetemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
