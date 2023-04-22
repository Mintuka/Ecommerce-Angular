import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
  items:any;
  constructor (private itemService: ItemService, private cartService: CartService) {
    this.itemService.items().subscribe(response => {
      const { data, status } = response;
      this.items = data
    })
  }

  addToCart ( itemData: any ) {
    const { _id } = itemData
    this.cartService.addToCart( {
                                  items: [{
                                    id: _id, 
                                    amount: 1}]
                                } )
    }
}
