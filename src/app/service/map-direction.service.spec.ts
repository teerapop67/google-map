import { TestBed } from '@angular/core/testing';

import { MapDirectionService } from './map-direction.service';

describe('MapDirectionService', () => {
  let service: MapDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
