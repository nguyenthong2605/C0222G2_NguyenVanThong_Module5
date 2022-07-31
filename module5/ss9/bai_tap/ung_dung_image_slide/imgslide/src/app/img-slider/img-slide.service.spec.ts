import { TestBed } from '@angular/core/testing';

import { ImgSlideService } from './img-slide.service';

describe('ImgSlideService', () => {
  let service: ImgSlideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSlideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
