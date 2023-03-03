import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReimbursementComponent } from './detail-reimbursement.component';

describe('DetailReimbursementComponent', () => {
  let component: DetailReimbursementComponent;
  let fixture: ComponentFixture<DetailReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
