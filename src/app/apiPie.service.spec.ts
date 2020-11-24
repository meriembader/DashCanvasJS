import { TestBed } from '@angular/core/testing';

import { ApiPieService } from './apiPie.service';

describe('ApiPieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPieService = TestBed.get(ApiPieService);
    expect(service).toBeTruthy();
  });
});


