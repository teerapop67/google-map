import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalVehicleComponent } from './personal-vehicle.component';

describe('PersonalVehicleComponent', () => {
  let component: PersonalVehicleComponent;
  let fixture: ComponentFixture<PersonalVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
