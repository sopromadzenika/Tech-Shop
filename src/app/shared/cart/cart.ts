
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  productCart = signal<any>([]);

  private http = inject(HttpClient);

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.http.get('https://shopapi.stepacademy.ge/api/cart').subscribe({
      next: (data: any) => {
        console.log(data)
        this.productCart.set(data.data);
      },
      error: () => {
        console.error('შეცდომა მოხდა პროდუქტის მიღებისას');
      },
    });
  };

  delate(id: number) {
  console.log('გადაცემული id:', id);
  this.http.delete(`https://shopapi.stepacademy.ge/api/cart/remove-from-cart/${id}`).subscribe({
    next: (data: any) => {
      console.log(data);
      this.getProduct();
    },
    error: () => {
      console.error('შეცდომა მოხდა პროდუქტის წაშლისას');
    }
  })
};
totalItems = computed(() => {
  if (!this.productCart() || !this.productCart().items) return 0;
  return this.productCart().items.reduce((sum: number, item: any) => sum + item.quantity, 0);
});

totalPrice = computed(() => {
  if (!this.productCart() || !this.productCart().items) return 0;
  return this.productCart().items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
});

showCreditCard = signal(false);

openCreditCard() {
  this.showCreditCard.set(true);
}

closeCreditCard() {
  this.showCreditCard.set(false);
}

checkOut() {
  this.http.post('https://shopapi.stepacademy.ge/api/users/checkout', {}).subscribe({
    next: (data: any) => {
      console.log(data);
      this.getProduct();
      this.closeCreditCard();
    },
    error: () => {
      console.error('შეცდომა');
    },
  });
}
}
