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

    const isClearCompletedDisabled = this.getIsClearCompletedDisabled(
      item,
      todolistStore.todolist$.getValue()
    );

    todolistStore.isClearCompletedDisabled$.next(isClearCompletedDisabled);
  }

  getIsClearCompletedDisabled(item: TodolistItem, todolist: TodolistItem[]): boolean {
    let isClearCompletedDisabled = true;

    if (item.isChecked) {
      isClearCompletedDisabled = false;
    } else if (todolist.filter(todolistItem => todolistItem.isChecked).length > 0) {
      isClearCompletedDisabled = false;
    }
    
    return isClearCompletedDisabled;
  }
}
