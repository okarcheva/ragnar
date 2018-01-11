import { Injectable } from '@angular/core';
import { IAction } from 'app/actions/i-action';
import { Store } from 'app/store/store';

@Injectable()
export class AddButtonClickedAction implements IAction {
  constructor(
    private store: Store
  ) {}

  async execute() {
    const todolistStore = this.store.todolistStore;
    const newIdCounter = todolistStore.idCounter$.getValue() + 1;
    todolistStore.idCounter$.next(newIdCounter);

    todolistStore.todolist$.next(
      todolistStore.todolist$.getValue()
      .concat(this.store.todolistStore.newItem$.getValue())
    );
    todolistStore.newItem$.next({
      id: newIdCounter,
      description: '',
      isChecked: false
    });
  }
}
