import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OrderPlaceComponent } from './components/order-place/order-place.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CartComponent,
    CustomerRegisterComponent,
    HomePageComponent,
    OrderPlaceComponent,
    AdminDashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce-app';
}
