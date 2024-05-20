import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Figurine Astérix', description: 'Figurine d\'Astérix avec Obélix', price: 15.99, image: './assets/img/asterix.jpeg' },
    { id: 2, name: 'Figurine Obélix', description: 'Figurine d\'Obélix avec Astérix', price: 15.99, image: './assets/img/obelix.jpeg' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}

