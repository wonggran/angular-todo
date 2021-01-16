import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoCurrentComponent } from './todo-current/todo-current.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoItemSettingsComponent } from './todo-item-settings/todo-item-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoCurrentComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoWrapperComponent,
    TodoItemSettingsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
