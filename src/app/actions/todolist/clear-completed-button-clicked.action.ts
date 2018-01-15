import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { TodolistService } from 'app/services/todolist.service';
import { Store } from 'app/store/store';

@Injectable()
export class ClearCompletedButtonClickedAction implements IAction {
  constructor(
    private store: Store,
    private todolistService: TodolistService
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
        item => { return this.todolistService.filterTodolist(filterValue, item); }
    ));

    todolistStore.isClearCompletedDisabled$.next(true);
  }
}
