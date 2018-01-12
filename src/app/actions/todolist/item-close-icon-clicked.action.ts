import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';

@Injectable()
export class ItemCloseIconClickedAction implements IDataAction<TodolistItem> {
  constructor(
    private store: Store
  ) {}

  async execute(itemForRemoval: TodolistItem) {
    const todolistStore = this.store.todolistStore;
    const filterValue = todolistStore.filterValue$.getValue();

    todolistStore.todolist$.next(todolistStore.todolist$.getValue().filter(
      item => item.id !== itemForRemoval.id
    ));

    todolistStore.todoListFiltered$.next(
      todolistStore.todolist$.getValue().filter(
        item => { return this.filterTodolist(filterValue, item); }
    ));

    const isClearCompletedDisabled = 
      todolistStore.todolist$.getValue().filter(item => item.isChecked).length > 0 ? false : true;

    todolistStore.isClearCompletedDisabled$.next(isClearCompletedDisabled);
  }
  
  filterTodolist(filterValue: TodolistFilter, todolistItem: TodolistItem) {
    if (filterValue === TodolistFilter.Active) {
      return !todolistItem.isChecked;
    } else if (filterValue === TodolistFilter.Completed) {
      return todolistItem.isChecked;
    }
    return true;
  }
}
