import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getCartItems(): any {
    return this.http.get(`http://localhost:3000/placeOrder`);
  }

  placeOrder(order: any): any {
    return this.http.post(`http://localhost:3000/placeOrder`, order);
  }
}
