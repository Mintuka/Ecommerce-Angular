import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  items:any;
  constructor (private itemService: ItemService) {
    this.itemService.items().subscribe((response:any) => {
      const { data } = response
      this.items = data
    })
  }

  remove (id:string) {
    this.items = this.items.filter((item:any) => item._id !== id)
    this.itemService.removeItem(id)
  }
}
