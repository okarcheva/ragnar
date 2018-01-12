import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';

@Injectable()
export class AddButtonClickedAction implements IAction {
  constructor(
    private store: Store
  ) {}

  async execute() {
    const todolistStore = this.store.todolistStore;
    const newIdCounter = todolistStore.idCounter$.getValue() + 1;
    const filterValue = todolistStore.filterValue$.getValue();

    todolistStore.newItem$.getValue().id = newIdCounter;

    todolistStore.idCounter$.next(newIdCounter);

    todolistStore.todolist$.next(
      todolistStore.todolist$.getValue()
      .concat(this.store.todolistStore.newItem$.getValue()
    ));

    todolistStore.todoListFiltered$.next(
      todolistStore.todolist$.getValue().filter(
        item => { return this.filterTodolist(filterValue, item); }
    ));

    todolistStore.newItem$.next({
      id: 0,
      description: '',
      isChecked: false
    });
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
