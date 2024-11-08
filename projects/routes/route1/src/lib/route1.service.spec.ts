import { TestBed } from '@angular/core/testing';

import { Route1Service } from './route1.service';

describe('Route1Service', () => {
  let service: Route1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
