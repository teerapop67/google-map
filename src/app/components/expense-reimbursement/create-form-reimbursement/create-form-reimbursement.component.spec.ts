import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormReimbursementComponent } from './create-form-reimbursement.component';

describe('CreateFormReimbursementComponent', () => {
  let component: CreateFormReimbursementComponent;
  let fixture: ComponentFixture<CreateFormReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
