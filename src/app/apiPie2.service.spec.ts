import { TestBed } from '@angular/core/testing';

import { ApiPie2Service } from './apiPie2.service';

describe('ApiPieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPie2Service = TestBed.get(ApiPie2Service);
    expect(service).toBeTruthy();
  });
});


