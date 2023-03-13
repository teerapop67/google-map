import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineApproveComponent } from './timeline-approve.component';

describe('TimelineApproveComponent', () => {
  let component: TimelineApproveComponent;
  let fixture: ComponentFixture<TimelineApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
