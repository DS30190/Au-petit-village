import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], name: string): Product[] {
    return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
  }
}

