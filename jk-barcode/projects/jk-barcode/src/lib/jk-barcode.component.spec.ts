import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkBarcodeComponent } from './jk-barcode.component';

describe('JkBarcodeComponent', () => {
  let component: JkBarcodeComponent;
  let fixture: ComponentFixture<JkBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JkBarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JkBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
