import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { BehaviorSubject } from 'rxjs';

export class TodolistStore {
  private _todoList$ = new BehaviorSubject<TodolistItem[]>([]);
  get todolist$() {
    return this._todoList$;
  }

  private _newItem$ = new BehaviorSubject<TodolistItem>({
    id: 0,
    description: '',
    isChecked: false
  });  
  get newItem$() {
    return this._newItem$;
  }

  private _idCounter$ = new BehaviorSubject<number>(0);  
  get idCounter$() {
    return this._idCounter$;
  }
}
