import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { Store } from 'app/store/store';

@Injectable()
export class AllFilterClickedAction implements IAction {
  constructor(
    private store: Store
  ) {}

  async execute() {
    const todolistStore = this.store.todolistStore;
    todolistStore.filterValue$.next(TodolistFilter.All);

    todolistStore.todoListFiltered$.next(todolistStore.todolist$.getValue());

    todolistStore.isAllFilterOn$.next(true);
    todolistStore.isActiveFilterOn$.next(false);
    todolistStore.isCompletedFilterOn$.next(false);
  }
}