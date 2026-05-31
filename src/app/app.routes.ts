import { Routes } from '@angular/router';
import { Signin } from './feature/signin/signin';
import { Home } from './feature/home/home';
import { Shop } from './feature/shop/shop';
import { Register } from './feature/register/register';
import { guardGuard } from './shared/guard-guard';
import { Cart } from './shared/cart/cart';
import { Verification } from './shared/verification/verification';
import { AboutUs } from './feature/about-us/about-us';
import { ContactUs } from './n8n/contact-us/contact-us';





export const routes: Routes = [
    {path: '', component: Home},
    {path: 'signin', component: Signin},
    {path: 'shop', component: Shop,canActivate: [guardGuard]},
    {
      path: 'shops/:id', 
      loadComponent: () => import('./shared/product-details/product-details').then((m) => m.ProductDetails),
      title: 'Product Details',
    },
    {
      path: 'categories/:id',
      loadComponent: () => import('./shared/product-input/product-input').then((m) => m.ProductInput),
      title: 'Product Input'
    },
    {path: 'register', component: Register},
    {path: 'cart', component: Cart, canActivate: [guardGuard]},
    {path: 'verification', component: Verification},
    {path: 'aboutus', component: AboutUs},
    {path: 'contact', component: ContactUs}
];
