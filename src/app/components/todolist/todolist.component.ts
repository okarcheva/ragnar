import { Component } from '@angular/core';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  todoList$: Observable<TodolistItem[]>;
  newItem$: Observable<TodolistItem>;
  // todoList: TodolistItem[] = [{
  //   description: 'Read a book',
  //   isChecked: true
  // }, {
  //   description: 'Go to dentist',
  //   isChecked: false
  // }];

  // newItem: TodolistItem = {
  //   description: '',
  //   isChecked: false
  // };

  constructor(
    store: Store,
    addButtonClickedAction: AddButtonClickedAction
  ) { 
    const todolist = store.todolistStore;

    this.todoList$ = todolist.todolist$;
    this.newItem$ = todolist.newItem$;
  }

  addButtonClicked() {

  }

}