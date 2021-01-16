import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ItemListService} from '../item-list.service'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  constructor(public itemListService: ItemListService) { }

  ngOnInit(): void {
  }

}
