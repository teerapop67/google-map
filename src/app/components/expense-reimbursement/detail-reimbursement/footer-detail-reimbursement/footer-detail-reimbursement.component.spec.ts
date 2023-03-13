import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDetailReimbursementComponent } from './footer-detail-reimbursement.component';

describe('FooterDetailReimbursementComponent', () => {
  let component: FooterDetailReimbursementComponent;
  let fixture: ComponentFixture<FooterDetailReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDetailReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDetailReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
