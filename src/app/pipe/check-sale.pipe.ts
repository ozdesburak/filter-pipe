import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkSale'
})
export class CheckSalePipe implements PipeTransform {

  transform(price: number): any {
    let sale = "Sale";
    let priceString = price.toFixed(2);
    let pp = "9" + priceString[priceString.length-1];
    if(pp === "97" || pp === "98"){
      return sale;
    }
  }

}