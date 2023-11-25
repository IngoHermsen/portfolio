import { TestBed } from '@angular/core/testing';

import { FontsInterceptor } from './fonts.interceptor';

describe('FontsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FontsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FontsInterceptor = TestBed.inject(FontsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
