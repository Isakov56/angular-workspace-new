import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLibComponent } from './i18n-lib.component';

describe('I18nLibComponent', () => {
  let component: I18nLibComponent;
  let fixture: ComponentFixture<I18nLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18nLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
