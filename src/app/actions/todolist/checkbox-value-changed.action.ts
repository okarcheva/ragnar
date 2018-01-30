import { Injectable } from '@angular/core';
import { IDataAction } from 'app/actions/i-data-action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistService } from 'app/services/todolist.service';
import { Store } from 'app/store/store';

@Injectable()
export class CheckboxValueChangedAction implements IDataAction<TodolistItem> {
  constructor(
    private store: Store,
    private todolistService: TodolistService
  ) {}

  async execute(todolistItem: TodolistItem) {
    const todolistStore = this.store.todolistStore;
    const filterValue = todolistStore.filterValue$.getValue();

    let changedItem = todolistStore.todolist$.getValue().find(
      todoItem => todoItem.id === todolistItem.id);
    if (changedItem) {
      changedItem.isChecked = todolistItem.isChecked;
    }
    
    todolistStore.todoListFiltered$.next(
      todolistStore.todolist$.getValue().filter(
        item => { return this.todolistService.filterTodolist(filterValue, item); }
    ));
  }   
}
