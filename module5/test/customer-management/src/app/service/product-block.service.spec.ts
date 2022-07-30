import { TestBed } from '@angular/core/testing';

import { ProductBlockService } from './product-block.service';

describe('ProductBlockService', () => {
  let service: ProductBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
