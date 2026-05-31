import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-input',
  imports: [],
  templateUrl: './product-input.html',
  styleUrl: './product-input.css',
})
export class ProductInput {
  @Input() techList!: any;

  quantity = 1;

  increase(){
  this.quantity++;
};

decrease(){
  if(this.quantity > 1){
    this.quantity--;
  };
}
}
