import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor(private http: HttpClient) {}

  getCartItem() {
    return this.http.get('http://localhost:3000/cartItems');
  }
}
