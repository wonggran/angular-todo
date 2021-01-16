import { Component, Input, OnInit } from '@angular/core';
import {todoItem} from '../todoItem'
import {ItemListService} from '../item-list.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(public itemListService: ItemListService) { }

  ngOnInit(): void {
  }

}
