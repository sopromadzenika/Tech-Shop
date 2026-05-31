import { Component, inject, Input, signal} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() product!: any;

  private http = inject(HttpClient);

  quantity = signal(1);

  addToCart() {
    console.log('productId:', this.product.id);
  console.log('token:', localStorage.getItem('accessToken'));

    this.http.post('https://shopapi.stepacademy.ge/api/cart/add-to-cart', {
      productId: this.product.id,
      quantity: this.quantity(),
    }).subscribe({
      next: () => {
        console.log("დაემატა");
      },
      error: () => {
        console.log('შეცდომაა')
      }
    })
  }
}
