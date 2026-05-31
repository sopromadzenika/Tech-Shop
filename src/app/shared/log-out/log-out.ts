import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-out',
  imports: [],
  templateUrl: './log-out.html',
  styleUrl: './log-out.css',
})
export class LogOut {
  @Input() accessToken: string = "";
  @Input() refreshToken: string = '';

  private router = inject(Router)

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/signin')
  }
}
