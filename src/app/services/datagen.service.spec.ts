import { TestBed } from '@angular/core/testing';

import { DatagenService } from './datagen.service';

describe('DatagenService', () => {
  let service: DatagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
