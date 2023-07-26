import { TestBed } from '@angular/core/testing';

import { JkBarcodeService } from './jk-barcode.service';

describe('JkBarcodeService', () => {
  let service: JkBarcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JkBarcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
