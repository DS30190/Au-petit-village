import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || products.length === 0 || !searchTerm) {
      return products;
    }
    searchTerm = searchTerm.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }
}


