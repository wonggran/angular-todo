import { Component, Input, OnInit } from '@angular/core';
import {todoItem} from '../todoItem'
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: todoItem;

  showSettings: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  getItemTextClass(showSettings) {
    return {
      'itemTextMouseout': !showSettings,
      'itemTextMouseover': showSettings
    }
  }

}
