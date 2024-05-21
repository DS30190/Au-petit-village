import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, Product } from '../products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortDirection: string = 'Asc';
  searchTerm: string = '';

  constructor(private productService: ProductsService, private router: Router) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...this.products];
    });
  }

  sortByPrice(direction: string): void {
    if (direction === 'Asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  searchByName(value: string): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
  }
  viewDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  } 
}


