import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  imports: [FormsModule],
  templateUrl: './verification.html',
  styleUrl: './verification.css',
})
export class Verification {
   code = '';

  private http = inject(HttpClient);
  private router = inject(Router);

  private email = localStorage.getItem('user_email') || '';

onVerify() {
  this.http.put(
    'https://shopapi.stepacademy.ge/api/auth/verify-email',
    { 
      email: this.email, 
      code: this.code 
    }
  ).subscribe({
    next: () => {
      this.router.navigateByUrl('/signin');
    },
    error: () => {
      alert('კოდი არასწორია');
    }
  });
}

  resendCode() {
    this.http.post(
      `https://shopapi.stepacademy.ge/api/auth/resend-email-verification/${this.email}`,
      {},
    ).subscribe({
      next: () => {
        alert('კოდი გამოგზავნილია!');
      },
      error: () => {
        alert('შეცდომა');
      }
    });
  }
}
