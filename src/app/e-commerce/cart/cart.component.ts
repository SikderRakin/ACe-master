import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productList: any = [];
  grandtotal!: number;
  totalItems!: number;
  constructor(private _cartSs: CartService) {}

  ngOnInit(): void {
    this._cartSs.getProducts().subscribe((products) => {
      this.productList = products;
      this.productList.forEach((product: any) => {
        Object.assign(product, { quantity: 1 });
      });
      this.totalItems = products.length;
      this.grandtotal = this._cartSs.getTotalPrice();
    });
  }

  onRemove(product: any[]) {
    this._cartSs.removeCartItem(product);
  }
}
