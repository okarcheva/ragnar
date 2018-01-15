import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistService } from 'app/services/todolist.service';
import { Store } from 'app/store/store';

@Injectable()
export class AddButtonClickedAction implements IDataAction<string> {
  constructor(
    private store: Store,
    private todolistService: TodolistService
  ) {}

  async execute(description: string) {
    const todolistStore = this.store.todolistStore;
    const newIdCounter = todolistStore.idCounter$.getValue() + 1;
    const filterValue = todolistStore.filterValue$.getValue();

    const newItem: TodolistItem = {
      id: newIdCounter,
      description: description,
      isChecked: false
    };

    todolistStore.idCounter$.next(newIdCounter);

    todolistStore.todolist$.next(
      todolistStore.todolist$.getValue().concat(newItem));

    todolistStore.todoListFiltered$.next(
      todolistStore.todolist$.getValue().filter(
        item => { return this.todolistService.filterTodolist(filterValue, item); }
    ));
  }
}
