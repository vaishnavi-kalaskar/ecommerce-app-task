import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent {
  customer = {
    name: '',
    email: '',
    password: '',
  };

  registerCustomer() {
    console.log(this.customer);
    this.customer = {
      name: '',
      email: '',
      password: '',
    };
  
  }
}

