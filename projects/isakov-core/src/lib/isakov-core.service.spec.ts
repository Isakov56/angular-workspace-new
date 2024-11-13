import { TestBed } from '@angular/core/testing';

import { IsakovCoreService } from './isakov-core.service';

describe('IsakovCoreService', () => {
  let service: IsakovCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsakovCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
