import { Component } from '@angular/core';
import { ActiveFilterClickedAction } from 'app/actions/todolist/active-filter-clicked.action';
import { AddButtonClickedAction } from 'app/actions/todolist/add-button-clicked.action';
import { AllFilterClickedAction } from 'app/actions/todolist/all-filter-clicked.action';
import { CheckboxValueChangedAction } from 'app/actions/todolist/checkbox-value-changed.action';
import { ClearCompletedButtonClickedAction } from 'app/actions/todolist/clear-completed-button-clicked.action';
import { CompletedFilterClickedAction } from 'app/actions/todolist/completed-filter-clicked.action';
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
  todoListFiltered$: Observable<TodolistItem[]>;
  isActiveFilterOn$: Observable<boolean>;
  isAllFilterOn$: Observable<boolean>;
  isCompletedFilterOn$: Observable<boolean>;
  isClearCompletedDisabled$: Observable<boolean>;
  description: string = '';

  constructor(
    store: Store,
    private addButtonClickedAction: AddButtonClickedAction,
    private checkboxValueChangedAction: CheckboxValueChangedAction,
    private itemCloseIconClickedAction: ItemCloseIconClickedAction,
    private activeFilterClickedAction: ActiveFilterClickedAction,
    private completedFilterClickedAction: CompletedFilterClickedAction,
    private allFilterClickedAction: AllFilterClickedAction,
    private clearCompletedButtonClickedAction: ClearCompletedButtonClickedAction                  
  ) { 
    const todolist = store.todolistStore;

    this.todoListFiltered$ = todolist.todoListFiltered$;
    this.isActiveFilterOn$ = todolist.isActiveFilterOn$;
    this.isAllFilterOn$ = todolist.isAllFilterOn$;
    this.isCompletedFilterOn$ = todolist.isCompletedFilterOn$;
    this.isClearCompletedDisabled$ = todolist.isClearCompletedDisabled$;
  }

  get isAddDisabled() {
    return this.description === '';
  }

  addButtonClicked() {    
    this.addButtonClickedAction.execute(this.description);
    this.description = '';
  }

  checkboxValueChanged = (item: TodolistItem) => {
    this.checkboxValueChangedAction.execute(item);
  }

  itemCloseIconClicked = (item: TodolistItem) => {
    this.itemCloseIconClickedAction.execute(item);
  }

  activeFilterClicked() {
    this.activeFilterClickedAction.execute();
  }

  completedFilterClicked() {
    this.completedFilterClickedAction.execute();
  }

  allFilterClicked() {
    this.allFilterClickedAction.execute();
  }

  clearCompletedButtonClicked() {
    this.clearCompletedButtonClickedAction.execute();
  }

}