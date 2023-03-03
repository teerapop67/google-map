import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutReimbursementComponent } from './layout-reimbursement.component';

describe('LayoutReimbursementComponent', () => {
  let component: LayoutReimbursementComponent;
  let fixture: ComponentFixture<LayoutReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
