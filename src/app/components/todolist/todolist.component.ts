import { Component } from '@angular/core';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistFilter } from 'app/models/todolist/todolist-enums';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  todoListFiltered$: Observable<TodolistItem[]>;
  isAllFilterOn: boolean;
  isActiveFilterOn: boolean;
  isCompletedFilterOn: boolean;
  isClearCompletedDisabled: boolean;

  constructor(store: Store) { 
    const todolist = store.todolistStore;
    this.todoListFiltered$ = todolist.todoListFiltered$;

    todolist.filterValue$.subscribe(filterValue => {
      this.isActiveFilterOn = filterValue === TodolistFilter.Active;
      this.isAllFilterOn = filterValue === TodolistFilter.All;
      this.isCompletedFilterOn = filterValue === TodolistFilter.Completed;
    });

    this.todoListFiltered$.subscribe(list => {
      this.isClearCompletedDisabled = list.filter(item => item.isChecked).length === 0;
    });
  }

}