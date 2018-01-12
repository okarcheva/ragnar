import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { Store } from 'app/store/store';

@Injectable()
export class ActiveFilterClickedAction implements IAction {
  constructor(
    private store: Store
  ) {}

  async execute() {
    const todolistStore = this.store.todolistStore;
    todolistStore.filterValue$.next(TodolistFilter.Active);

    todolistStore.todoListFiltered$.next(todolistStore.todolist$.getValue().filter(
      item => !item.isChecked
    ));

    todolistStore.isActiveFilterOn$.next(true);
    todolistStore.isAllFilterOn$.next(false);
    todolistStore.isCompletedFilterOn$.next(false);
  }
}