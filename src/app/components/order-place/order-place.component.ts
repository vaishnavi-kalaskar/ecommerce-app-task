import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-place',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './order-place.component.html',
  styleUrl: './order-place.component.css',
})
export class OrderPlaceComponent   {
  order: any = {};
  cartItems: any ;
  constructor(private placeOrdSer:  OrderService,private http:HttpClient) {
    this.getItems()
  }
  

  placeOrder(): void {
    this.http.post("http://localhost:3000/placeOrder",this.order).subscribe(() => {
      console.log('Order placed successfully!');
    });
    this.getItems()
  }

  getItems(){
    console.log("run");
    this.http.get(`http://localhost:3000/placeOrder`).subscribe((res:any)=>{
      this.cartItems = res;
    })
  }
}











//  