import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHeaderLinkComponent } from './btn-header-link.component';

describe('BtnHeaderLinkComponent', () => {
  let component: BtnHeaderLinkComponent;
  let fixture: ComponentFixture<BtnHeaderLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnHeaderLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnHeaderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
