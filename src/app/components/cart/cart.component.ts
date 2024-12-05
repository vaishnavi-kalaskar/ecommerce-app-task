import { Component, OnInit } from '@angular/core';
// import { CartServiceService } from '../services/cart-service.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NapipePipe } from '../../pipe/napipe.pipe';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NapipePipe, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItem: any;

  constructor(private cartsrv:  CartServiceService) {}
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.cartsrv.getCartItem().subscribe((data: any) => {
      this.cartItem = data;
    });
  }
}
