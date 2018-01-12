import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';

@Injectable()
export class ClearCompletedButtonClickedAction implements IAction {
  constructor(
    private store: Store
  ) {}

  async execute() {
    const todolistStore = this.store.todolistStore;
    const filterValue = todolistStore.filterValue$.getValue();

    todolistStore.todolist$.next(
      todolistStore.todolist$.getValue().filter(
        item => !item.isChecked
      )
    );

    todolistStore.todoListFiltered$.next(
      todolistStore.todolist$.getValue().filter(
        item => { return this.filterTodolist(filterValue, item); }
    ));

    todolistStore.isClearCompletedDisabled$.next(true);
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
