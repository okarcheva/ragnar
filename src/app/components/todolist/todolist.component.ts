import { Component } from '@angular/core';
import { CheckboxValueChangedAction } from 'app/actions/todolist/checkbox-value-changed.action';
import { ItemCloseIconClickedAction } from 'app/actions/todolist/item-close-icon-clicked.action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistFilter } from 'app/models/todolist/todolist-enums';
import { Store } from 'app/store/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  todoListFiltered$: Observable<TodolistItem[]>;
  isAllFilterOn: boolean;
  isActiveFilterOn: boolean;
  isCompletedFilterOn: boolean;
  isClearCompletedDisabled: boolean;
  filterValue$: Observable<TodolistFilter>;

  constructor(
    store: Store,
    private checkboxValueChangedAction: CheckboxValueChangedAction,
    private itemCloseIconClickedAction: ItemCloseIconClickedAction,               
  ) { 
    const todolist = store.todolistStore;
    this.todoListFiltered$ = todolist.todoListFiltered$;

    this.filterValue$.subscribe(filterValue => {
      this.isActiveFilterOn = filterValue === TodolistFilter.Active;
      this.isAllFilterOn = filterValue === TodolistFilter.All;
      this.isCompletedFilterOn = filterValue === TodolistFilter.Completed;
    });
  }

  checkboxValueChanged = (item: TodolistItem) => {
    this.checkboxValueChangedAction.execute(item);
  }

  itemCloseIconClicked = (item: TodolistItem) => {
    this.itemCloseIconClickedAction.execute(item);
  }
}