import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get('http://localhost:3000/customer');
  }

  addProduct(product: any) {
    return this.http.post('http://localhost:3000/product', product);
  }

  getProduct() {
    return this.http.get('http://localhost:3000/product');
  }

  getOrder() {
    return this.http.get('http://localhost:3000/order');
  }
}
