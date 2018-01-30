import { Injectable } from '@angular/core';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistFilter } from 'app/models/todolist/todolist-enums';

@Injectable()
export class TodolistService {

  filterTodolist(filterValue: TodolistFilter, todolistItem: TodolistItem) {
    if (filterValue === TodolistFilter.Active) {
      return todolistItem.isChecked === false;
    } else if (filterValue === TodolistFilter.Completed) {
      return todolistItem.isChecked === true;
    }
    return true;
  }

}
