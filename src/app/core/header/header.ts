import { Component} from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { LogOut } from '../../shared/log-out/log-out';
import { IconCart } from '../../shared/icon-cart/icon-cart';




@Component({
  selector: 'app-header',
  imports: [Logo, RouterLink, RouterLinkActive, IconCart, LogOut],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  burgerBtn = false;

  toggleMenu(){
  this.burgerBtn = !this.burgerBtn;
}

  get islogedOut(): boolean{
    return !!localStorage.getItem('accessToken');
  };
}
