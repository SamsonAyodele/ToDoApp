import { TestBed } from '@angular/core/testing';

import { ToDoCrudService } from './to-do-crud.service';

describe('ToDoCrudService', () => {
  let service: ToDoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
