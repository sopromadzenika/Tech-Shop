import { HttpClient} from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
signInData = {
    firstName: '',
    lastName: '',
    email: "",
    password: "",
  };

  private http = inject(HttpClient);
  private router = inject(Router)


  register(){
   this.http.post('https://shopapi.stepacademy.ge/api/auth/register', this.signInData).subscribe({
    next: (data: any) =>{
      localStorage.setItem('user_email', data.data);
      localStorage.setItem('user_password', this.signInData.password),
      this.router.navigateByUrl('/verification')
    },
    error: (err) => {
      alert('მოხდა შეცდომა');
    }
   })
}
}