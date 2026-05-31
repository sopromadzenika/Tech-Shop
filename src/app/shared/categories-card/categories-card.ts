import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-card',
  imports: [RouterLink],
  templateUrl: './categories-card.html',
  styleUrl: './categories-card.css',
})
export class CategoriesCard {
  @Input() categories!: any;
}
