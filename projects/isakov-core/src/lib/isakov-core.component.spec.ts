import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsakovCoreComponent } from './isakov-core.component';

describe('IsakovCoreComponent', () => {
  let component: IsakovCoreComponent;
  let fixture: ComponentFixture<IsakovCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsakovCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsakovCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
