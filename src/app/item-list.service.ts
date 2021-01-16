import { Injectable } from '@angular/core';
import {todoItem} from './todoItem'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  items: todoItem[] = []

  idCounter = 0

  constructor() { }


  getItemList(): Observable<todoItem[]> {
    return of(this.items) // mock HTTP call, to database API
  }

  appendItem(text: string): void {
    this.items.push({id: this.idCounter, text: text})
    this.idCounter++;
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id)
  }
}
