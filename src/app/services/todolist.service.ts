import { Injectable } from '@angular/core';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';

@Injectable()
export class TodolistService {

  filterTodolist(filterValue: TodolistFilter, todolistItem: TodolistItem) {
    if (filterValue === TodolistFilter.Active) {
      return todolistItem.isChecked;
    } else if (filterValue === TodolistFilter.Completed) {
      return todolistItem.isChecked;
    }
    return true;
  }

}
