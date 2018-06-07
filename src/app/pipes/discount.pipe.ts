import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: any, offer: boolean): number {
    if (offer) {
      if (price > 20000)
        return price - price * 0.17;
      if (price > 15000)
        return price - price * 0.14;
      if (price > 11000)
        return price - price * 0.08;
      else
        return price - price * 0.04;
    }
  }

}
