import { TestBed } from '@angular/core/testing';

import { ApiHighService } from './apiHigh.service';


describe('ApiHighService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHighService = TestBed.get(ApiHighService);
    expect(service).toBeTruthy();
  });
});

