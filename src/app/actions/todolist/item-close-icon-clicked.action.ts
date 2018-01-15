import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistService } from 'app/services/todolist.service';
import { Store } from 'app/store/store';

@Injectable()
export class ItemCloseIconClickedAction implements IDataAction<TodolistItem> {
  constructor(
    private store: Store,
    private todolistService: TodolistService
  ) {}

  async execute(itemForRemoval: TodolistItem) {
    const todolistStore = this.store.todolistStore;
    const filterValue = todolistStore.filterValue$.getValue();

    todolistStore.todolist$.next(todolistStore.todolist$.getValue().filter(
      item => item.id !== itemForRemoval.id
    ));

    todolistStore.todoListFiltered$.next(
      todolistStore.todolist$.getValue().filter(
        item => { return this.todolistService.filterTodolist(filterValue, item); }
    ));

    const isClearCompletedDisabled = 
      todolistStore.todolist$.getValue().filter(item => item.isChecked).length > 0 ? false : true;

    todolistStore.isClearCompletedDisabled$.next(isClearCompletedDisabled);
  }
}
