import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { BehaviorSubject } from 'rxjs';

export class TodolistStore {
  private _todoList$ = new BehaviorSubject<TodolistItem[]>([]);
  get todolist$() {
    return this._todoList$;
  }

  private _todoListFiltered$ = new BehaviorSubject<TodolistItem[]>([]);
  get todoListFiltered$() {
    return this._todoListFiltered$;
  }

  private _idCounter$ = new BehaviorSubject<number>(0);  
  get idCounter$() {
    return this._idCounter$;
  }

  private _filterValue$ = new BehaviorSubject<TodolistFilter>(TodolistFilter.All);
  get filterValue$() {
    return this._filterValue$;
  }

  private _isActiveFilterOn$ = new BehaviorSubject<boolean>(false);
  get isActiveFilterOn$() {
    return this._isActiveFilterOn$;
  }

  private _isAllFilterOn$ = new BehaviorSubject<boolean>(true);
  get isAllFilterOn$() {
    return this._isAllFilterOn$;
  }

  private _isCompletedFilterOn$ = new BehaviorSubject<boolean>(false);
  get isCompletedFilterOn$() {
    return this._isCompletedFilterOn$;
  }

  private _isClearCompletedDisabled$ = new BehaviorSubject<boolean>(true);
  get isClearCompletedDisabled$() {
    return this._isClearCompletedDisabled$;
  }
}
