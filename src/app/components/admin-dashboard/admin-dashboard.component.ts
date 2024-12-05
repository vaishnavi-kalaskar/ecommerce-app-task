import { Component, OnInit } from '@angular/core';
// import { AdminServiceService } from '../services/admin-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NapipePipe } from '../../pipe/napipe.pipe';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule,   CurrencyPipe,  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
   
  customer: any;
  newProduct = { name: '', description: '', price: 0 };
  orders: any;
  sortedOrders: any;

  constructor(private adminserv: AdminServiceService) {}

  ngOnInit() {
    this.fetchCustomer();
    this.fetchOrder();
  }

  fetchCustomer() {
    this.adminserv.getCustomers().subscribe((data: any) => {
      this.customer = data;
    });
  }

  fetchOrder() {
    this.adminserv.getOrder().subscribe((data: any) => {
      this.orders = data;
      console.log(this.orders);
    });
  }

  addProduct() {
    this.adminserv.addProduct(this.newProduct).subscribe(() => {
      alert('product added successfully !!!!');
      this.newProduct = { name: '', description: '', price: 0 };
    });
  }
}
