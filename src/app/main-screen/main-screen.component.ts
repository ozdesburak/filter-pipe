import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})

export class MainScreenComponent implements OnInit {
  searchBoxTxt: string = '';
  myData: any[]= [{
        "productCode": "876544",
        "productName": "T shirt",
        "productQuantity":21,
        "productPrice": 19.99
    }, {
        "productCode": "946765",
        "productName": "Coat",
        "productQuantity": 16,
        "productPrice": 99.97
    }, {
        "productCode": "340542",
        "productName": "Hoody",
        "productQuantity": 34,
        "productPrice": 29.99
    }, {
        "productCode": "230945",
        "productName": "Belt",
        "productQuantity": 9,
        "productPrice": 9.97
    }, {
        "productCode": "981875",
        "productName": "Pant",
        "productQuantity": 6,
        "productPrice": 69.99
    }, {
        "productCode": "999876",
        "productName": "Shirt",
        "productQuantity": 12,
        "productPrice": 16.99
    }, {
        "productCode": "109876",
        "productName": "Socks",
        "productQuantity": 43,
         "productPrice": 9.98
    }, {
        "productCode": "762341",
        "productName": "Sweater",
        "productQuantity": 23,
        "productPrice": 43.99
    }, {
        "productCode": "873445",
        "productName": "Shoe",
        "productQuantity": 10,
        "productPrice": 31.97
    }];


  constructor() { }

  ngOnInit() {  }

}