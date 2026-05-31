import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-signin',
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  signInData = {
    email: "",
    password: "",
  };

  private client = inject(HttpClient);
  private router = inject(Router)

  onSubmit(){
    this.client.post('https://shopapi.stepacademy.ge/api/auth/login', this.signInData).subscribe({
      next: (data: any) => {
        console.log(data);
        localStorage.setItem('accessToken', data.data.accessToken),
        localStorage.setItem('refreshToken', data.data.refreshToken);
        this.router.navigateByUrl('/');
        console.log(data);
      }, error: () => {
        alert('მოხდა შეცდომა');
      },
    });
  }
  

}