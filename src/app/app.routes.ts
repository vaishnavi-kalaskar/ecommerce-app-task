import { Routes } from '@angular/router';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderPlaceComponent } from './components/order-place/order-place.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: CustomerRegisterComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'adminDash',
    component: AdminDashboardComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orderPlace',
    component: OrderPlaceComponent,
  },
];
