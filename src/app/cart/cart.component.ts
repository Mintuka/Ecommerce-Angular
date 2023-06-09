import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items:any = [];
  constructor(private itemService: ItemService, private cartService: CartService){
  }

  ngOnInit(): void {
    if ( localStorage.getItem('user') !== null ) {
      const user: any = JSON.parse(localStorage.getItem('user') || '')   
      console.log(user)
  }
    this.cartService.getCart().subscribe({
      next: response => {
        console.log('res',response)
        const { data } = response;
        for ( const item of data.cartItems ) {
          this.items.push([item.image, item.name, item.price, 1, item._id])
        }
      },
      error: err => {
        console.log('err',err)
      }
    })
  }

  addAmount (event: any, item:any) {
    this.items.map( ( itemData:any ) => {
      let updated = [...itemData]
      if ( item[4] === itemData[4] ) {
        updated[3] = parseInt(event.target.value,10)
      }
      return updated
    })
  }

  cancel (item:any) {
    this.cartService.addToCart({ itemId:item[4], isAdd:false })
    this.items = this.items.filter( (itemData:any) => itemData[4] !== item[4] )
  }

  order (item:any) {
    const updatedItem = { image:item[0], name:item[1], price:item[2], amount:item[3], isAdd:false }
    this.itemService.orderItem(updatedItem, item[4])
    this.cartService.addToCart({ itemId:item[4], isAdd:false })
    this.items = this.items.filter( (itemData:any) => itemData[4] !== item[4] )
  }
}
