import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { getItems } from 'src/api/item/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private router: Router) { }

  items = () => from(getItems())
}
