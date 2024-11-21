import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesLibComponent } from './themes-lib.component';

describe('ThemesLibComponent', () => {
  let component: ThemesLibComponent;
  let fixture: ComponentFixture<ThemesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
