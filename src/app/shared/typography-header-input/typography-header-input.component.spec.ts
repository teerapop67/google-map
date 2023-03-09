import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyHeaderInputComponent } from './typography-header-input.component';

describe('TypographyHeaderInputComponent', () => {
  let component: TypographyHeaderInputComponent;
  let fixture: ComponentFixture<TypographyHeaderInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographyHeaderInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyHeaderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
