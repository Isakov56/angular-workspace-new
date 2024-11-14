import { TestBed } from '@angular/core/testing';

import { I18nLibService } from './i18n-lib.service';

describe('I18nLibService', () => {
  let service: I18nLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
