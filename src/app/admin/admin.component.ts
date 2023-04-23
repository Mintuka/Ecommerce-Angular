import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  currentItem:any = { name:'', image:'', amount:'', price:'', _id:''};
  closeResult:any;
  items:any = [];
  constructor (private itemService: ItemService, private modalService: NgbModal) {
    this.itemService.items().subscribe((response:any) => {
      const { data } = response
      this.items = data
    })
  }

  Submit (itemData:any) {
    this.items.push(itemData) 
    this.itemService.create(itemData)
  }

  Update (itemData:any, id:string) {
    this.items = this.items.filter((item:any) => item._id !== id)
    this.items.push(itemData)
    this.itemService.update(itemData, id)
  }
  edit (item:any) {
    this.currentItem = { ...item }
  }

  remove (id:string) {
    this.items = this.items.filter((item:any) => item._id !== id)
    this.itemService.removeItem(id)
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openUpdate(updatedContent: any) {
    this.modalService.open(updatedContent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
