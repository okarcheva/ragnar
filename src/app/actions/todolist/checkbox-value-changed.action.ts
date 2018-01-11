import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';

@Injectable()
export class CheckboxValueChangedAction implements IDataAction<TodolistItem> {
  constructor(
    private store: Store
  ) {}

  async execute(item: TodolistItem) {
    const todolistStore = this.store.todolistStore;

    let changedItem = todolistStore.todolist$.getValue().find(
      todoItem => todoItem.id === item.id);
    if (changedItem) {
      changedItem.isChecked = item.isChecked;
    }    

    todolistStore.todolist$.next(todolistStore.todolist$.getValue());
  }
}
