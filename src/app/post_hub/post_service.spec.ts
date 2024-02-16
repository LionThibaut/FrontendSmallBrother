import { TestBed } from '@angular/core/testing';

import { Post_service} from "./post_service";

describe('ServicePostService', () => {
  let service: Post_service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post_service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
