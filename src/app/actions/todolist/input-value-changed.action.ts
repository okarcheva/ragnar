import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { Store } from 'app/store/store';

@Injectable()
export class InputValueChangedAction implements IDataAction<string> {
  constructor(
    private store: Store
  ) {}

  async execute(newItemDescription: string) {
    const todolistStore = this.store.todolistStore;
    todolistStore.newItem$.next({
      id: 0,
      description: newItemDescription,
      isChecked: false
    });
  }
}
