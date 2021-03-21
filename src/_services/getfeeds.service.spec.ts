import { TestBed } from '@angular/core/testing';

import { GetfeedsService } from './getfeeds.service';

describe('GetfeedsService', () => {
  let service: GetfeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
