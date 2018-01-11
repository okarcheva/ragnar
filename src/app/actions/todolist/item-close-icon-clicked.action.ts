import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';

@Injectable()
export class ItemCloseIconClickedAction implements IDataAction<TodolistItem> {
  constructor(
    private store: Store
  ) {}

  async execute(itemForRemoval: TodolistItem) {
    const todolistStore = this.store.todolistStore;

    todolistStore.todolist$.next(todolistStore.todolist$.getValue().filter(
      item => item.id !== itemForRemoval.id
    ));
  }
}
