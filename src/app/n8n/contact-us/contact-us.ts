import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  private http = inject(HttpClient);

  contact ={
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  message(){
    this.http.post("https://nikadev.app.n8n.cloud/webhook/contact-form", this.contact).subscribe();
  };
}
