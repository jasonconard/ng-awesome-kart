import { TestBed } from '@angular/core/testing';

import { BindingsService } from './bindings.service';

describe('BindingsService', () => {
  let service: BindingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
