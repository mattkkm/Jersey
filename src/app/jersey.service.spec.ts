/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JerseyService } from './jersey.service';

describe('JerseyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JerseyService]
    });
  });

  it('should ...', inject([JerseyService], (service: JerseyService) => {
    expect(service).toBeTruthy();
  }));
});
