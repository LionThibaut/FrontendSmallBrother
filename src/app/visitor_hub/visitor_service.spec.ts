import { TestBed } from '@angular/core/testing';

import { Visitor_Service } from './visitor_.service';

describe('RegisterServiceService', () => {
  let service: Visitor_Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Visitor_Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
