import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
  @Input('image') image: string | undefined;
  @Input('name') name: string | undefined
  @Input('price') price: string | undefined
}
