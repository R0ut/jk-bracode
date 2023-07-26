import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import bwipjs from 'bwip-js';

@Component({
  selector: 'jk-barcode',
  template: `This is Barcode: <canvas #barcode></canvas>`
})
export class JkBarcodeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.renderBarcode('test');
   }


  /**
   * @hidden
   */
   @ViewChild('barcode')
  barcode!: ElementRef;

     /**
   * @hidden
   */
  renderBarcode(value: string): void {
    const canvas = this.barcode?.nativeElement;
    if (canvas) {
       bwipjs.toCanvas(canvas, {
         bcid: 'datamatrix',
         text: 'test value',
         scale: 10,
         rotate: "N",
         includetext: true,
         textxalign: 'center'
       });
    }
  }
}
