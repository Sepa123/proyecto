import { TestBed } from '@angular/core/testing';

import { TransyanezService } from './transyanez.service';

describe('TransyanezService', () => {
  let service: TransyanezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransyanezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
