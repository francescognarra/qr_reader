import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private toast: Toast) {

  }

  scan() {
  this.selectedProduct = {};
  this.barcodeScanner.scan().then((barcodeData) => {
    this.productFound = true;
    console.log(barcodeData.text);
    alert(barcodeData.text);
    this.selectedProduct = barcodeData.text;
    // this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
  }, (err) => {
    this.toast.show(err, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  });
}

}
