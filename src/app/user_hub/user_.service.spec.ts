import { TestBed } from '@angular/core/testing';

import { User_Service } from './user_.service';

describe('ProfileService', () => {
  let service: User_Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User_Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
