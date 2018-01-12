import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';

@Injectable()
export class AddButtonClickedAction implements IDataAction<string> {
  constructor(
    private store: Store
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
        item => { return this.filterTodolist(filterValue, item); }
    ));
  }

  filterTodolist(filterValue: TodolistFilter, todolistItem: TodolistItem) {
    if (filterValue === TodolistFilter.Active) {
      return todolistItem.isChecked;
    } else if (filterValue === TodolistFilter.Completed) {
      return todolistItem.isChecked;
    }
    return true;
  }
}
