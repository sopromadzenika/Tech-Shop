import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CategoriesCard } from '../../shared/categories-card/categories-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CategoriesCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categoriesList = signal<any>([]);

  private http = inject(HttpClient);

  ngOnInit(){
    this.shop();
  };

  private router = inject(Router);

  shop(){
    this.http.get('https://shopapi.stepacademy.ge/api/categories').subscribe({
      next: (data: any) => {
        this.categoriesList.set(data.data);
      },
      error: () => {
        console.log('შეცდომაა')
      }
    })
  }

}
