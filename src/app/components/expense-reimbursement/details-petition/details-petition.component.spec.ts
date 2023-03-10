import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPetitionComponent } from './details-petition.component';

describe('DetailsPetitionComponent', () => {
  let component: DetailsPetitionComponent;
  let fixture: ComponentFixture<DetailsPetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
