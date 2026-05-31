import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productData = signal<any>(null);
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://shopapi.stepacademy.ge/api/products/${id}`).subscribe({
      next: (data: any) => {
        this.productData.set(data.data);
      }
    });
  };

  quantity = 1;

  decrease(){
    if(this.quantity > 1){
      this.quantity--;
    };
  };

  increase(){
    if(this.quantity < this.productData().stock){
      this.quantity++;
    }
  };
}
