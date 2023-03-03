import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReimbursementComponent } from './history-reimbursement.component';

describe('HistoryReimbursementComponent', () => {
  let component: HistoryReimbursementComponent;
  let fixture: ComponentFixture<HistoryReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
