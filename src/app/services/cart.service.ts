import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { addItemToCart } from 'src/api/cart/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private router: Router) { }

  addToCart = ( itemData: any ) => {
    const updated = from(addItemToCart(itemData))
    console.log(updated)
    return updated
  }
}
