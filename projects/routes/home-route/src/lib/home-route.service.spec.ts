import { TestBed } from '@angular/core/testing';

import { HomeRouteService } from './home-route.service';

describe('HomeRouteService', () => {
  let service: HomeRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
