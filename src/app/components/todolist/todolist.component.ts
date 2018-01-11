import { Component } from '@angular/core';
import { AddButtonClickedAction } from 'app/actions/todolist/add-button-clicked-action';
import { CheckboxValueChangedAction } from 'app/actions/todolist/checkbox-value-changed.action';
import { InputValueChangedAction } from 'app/actions/todolist/input-value-changed.action';
import { ItemCloseIconClickedAction } from 'app/actions/todolist/item-close-icon-clicked.action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  todoList$: Observable<TodolistItem[]>;
  newItem$: Observable<TodolistItem>;
  description: string = '';

  constructor(
    store: Store,
    private addButtonClickedAction: AddButtonClickedAction,
    private inputValueChangedAction: InputValueChangedAction,
    private checkboxValueChangedAction: CheckboxValueChangedAction,
    private itemCloseIconClickedAction: ItemCloseIconClickedAction
  ) { 
    const todolist = store.todolistStore;

    this.todoList$ = todolist.todolist$;
    this.newItem$ = todolist.newItem$;
  }

  addButtonClicked() {    
    this.addButtonClickedAction.execute();
    this.description = '';
  }

  inputValueChanged() {
    this.inputValueChangedAction.execute(this.description);
  }

  checkboxValueChanged = (item: TodolistItem) => {
    this.checkboxValueChangedAction.execute(item);
  }

  itemCloseIconClicked = (item: TodolistItem) => {
    this.itemCloseIconClickedAction.execute(item);
  }

}