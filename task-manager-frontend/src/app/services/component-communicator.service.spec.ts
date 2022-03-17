import { TestBed } from '@angular/core/testing';

import { ComponentCommunicatorService } from './component-communicator.service';

describe('ComponentCommunicatorService', () => {
  let service: ComponentCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
