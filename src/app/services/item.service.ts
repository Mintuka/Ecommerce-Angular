import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { deleteItem, getItems, updateItem } from 'src/api/item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private router: Router) { }

  items = () => from(getItems())

  async orderItem(item:any, id:string): Promise<any> {
    const { status } = await updateItem(item,id);
    if ( status == 200 ) {
      //notify successfully done
      this.router.navigate(['/cart']);
    } else if ( status == 210 ) {
      //amount isn't correct
    } else {
      //notify user he/she unable to purchase
    }
  }

  async removeItem(id:string): Promise<any> {
    const { status } = await deleteItem(id)
    if ( status == 200 ) {
      //notify successfully removed
      this.router.navigate(['/admin']);
    } else {
      //notify user he/she unable to delete
    }
  }

}
