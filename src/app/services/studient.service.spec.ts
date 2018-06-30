import { TestBed, inject } from '@angular/core/testing';

import { StudientService } from './studient.service';

describe('StudientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudientService]
    });
  });

  it('should be created', inject([StudientService], (service: StudientService) => {
    expect(service).toBeTruthy();
  }));
});
