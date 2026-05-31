import { HttpClient } from '@angular/common/http';
import { Component, inject, signal} from '@angular/core';
import { Products } from '../../shared/products/products';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [Products, FormsModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  productShop = signal<any>([]);

  private http = inject(HttpClient);

  ngOnInit(){
    this.getProduct();
    this.categories();
    this.categoriesList();
    this.categoriesFromHomeToShop();
  };
  pageTake = signal(10);
  pagePage = signal(1);

  liveSearchquery = signal("");

  isLoading = signal(true);

  getProduct(){
    this.http.get('https://shopapi.stepacademy.ge/api/products', {
    params: {
      Take: this.pageTake(),
      Page: this.pagePage(),
    }
    }).subscribe({
      next: (data: any) => {
        this.productShop.set(data.data.items);
        console.log(data);
        this.isLoading.set(false);
      },
      error: () =>{
        console.log('შეცდომაა');
      }
    })
  };

  nextPage(){
    this.pagePage.update((x) => x + 1);
    this.getProduct();
    window.scrollTo({top: 0});
  };
  preview(){
    if(this.pagePage() > 1){
      this.pagePage.update((x) => x - 1);
      this.getProduct();
      window.scrollTo({top: 0});
    }
  };

  categoriesList = signal<any>([]);

  categories(){

    this.http.get('https://shopapi.stepacademy.ge/api/categories', {
    }).subscribe({
      next: (data: any) => {
        this.categoriesList.set(data.data)
      },
      error: () => {
        console.log('შეცდომა არის');
      }
    })
  };

  allProduct() {
    this.getProduct();
  }

  pageCategory = signal(1);

  pageCategories(id: number){
    this.pageCategory.set(id);
    this.getProductList();
  }

  getProductList(){
      this.http.get('https://shopapi.stepacademy.ge/api/products/filter', {
        params: {
          categoryId: this.pageCategory(),
        }
      }).subscribe({
        next: (data: any) => {
          this.productShop.set(data.data.items);
        },
        error: () => {
          console.log('შეცდომა არის');
        }
      })
  }

  livesearch(value: string){
    this.liveSearchquery.set(value);
    this.http.get('https://shopapi.stepacademy.ge/api/products/search', {
    params: {
      Take: this.pageTake(),
      Page: this.pagePage(),
      query: this.liveSearchquery(),
    }
    }).subscribe({
      next: (data: any) => {
        this.productShop.set(data.data.items);
        console.log(data)
      },
      error: () =>{
        console.log('შეცდომაა');
      }
    })
  };


  private route = inject(ActivatedRoute);

  categoriesFromHomeToShop(){
     this.route.queryParams.subscribe(params => {
    const categoryId = params['categoryId'];
    if(categoryId) {
      this.filterByCategory(categoryId);
    }
  });
  };

  filterByCategory(categoryId: number){
  this.http.get('https://shopapi.stepacademy.ge/api/products/filter', {
    params: {
      CategoryId: categoryId,
      Take: this.pageTake(),
      Page: this.pagePage(),
    }
  }).subscribe({
    next: (data: any) => {
      this.productShop.set(data.data.items);
    },
    error: () => {
      console.log('შეცდომაა');
    }
  })
};

//ფილტრი

minPrice: number | null = null;
maxPrice: number | null = null;
minRating: number | null = null;
brand: string = '';

filterFunction(){
  this.http.get('https://shopapi.stepacademy.ge/api/products/filter', {
    params: {
      MinPrice: this.minPrice ? this.minPrice.toString() : '',
      MaxPrice: this.maxPrice ? this.maxPrice.toString() : '',
      MinRating: this.minRating ? this.minRating.toString() : '',
      Brand: this.brand,
    }
  }).subscribe({
    next: (data: any) => {
      this.productShop.set(data.data.items);
    },
    error: () => {
      console.log('შეცდომაა');
    }
  })
};
resetFilter(){
  this.minPrice = null;
  this.maxPrice = null;
  this.minRating = null;
  this.brand = '';
  this.getProduct();
};



}
