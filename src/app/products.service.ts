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
    { id: 1, name: 'Figurine Astérix', description: 'Figurine d\'Astérix au glaive', price: 15.99, imageUrl: './assets/img/asterix.jpeg' },
    { id: 2, name: 'Figurine Obélix', description: 'Figurine d\'Obélix avec un menhir', price: 15.99, imageUrl: './assets/img/obelix.jpeg' },
    { id: 3, name: 'Figurine Astérix et Obélix', description: 'Figurine d\'Astérix et Obélix à la chasse aux sangliers', price: 24.99, imageUrl: './assets/img/sanglier.jpeg' },
    { id: 4, name: 'Figurine Astérix et Idefix', description: 'Figurine d\'Astérix avec Idéfix', price: 22.99, imageUrl: './assets/img/idefix.jpeg' },
    { id: 5, name: 'Figurine Astérix et Obélix romains', description: 'Figurine d\'Astérix avec Obélix en romains', price: 25.99, imageUrl: './assets/img/romain.jpeg' }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}

