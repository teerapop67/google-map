import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFareRateComponent } from './edit-fare-rate.component';

describe('EditFareRateComponent', () => {
  let component: EditFareRateComponent;
  let fixture: ComponentFixture<EditFareRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFareRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFareRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
