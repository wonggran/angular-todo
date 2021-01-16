import { Component, Input, OnInit } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {todoItem} from '../todoItem'
import { Output, EventEmitter } from '@angular/core';
import {ItemListService} from '../item-list.service'

@Component({
  selector: 'app-todo-item-settings',
  templateUrl: './todo-item-settings.component.html',
  styleUrls: ['./todo-item-settings.component.css']
})
export class TodoItemSettingsComponent implements OnInit {
  @Input() showSettings: boolean
  @Input() item: todoItem

  faTrashAlt = faTrashAlt

  constructor(public itemListService: ItemListService) { }

  ngOnInit(): void {
  }

}
