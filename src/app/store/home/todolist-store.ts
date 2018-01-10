import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { BehaviorSubject } from 'rxjs';

export class TodolistStore {
  private _newItem$ = new BehaviorSubject<TodolistItem>({
    description: '',
    isChecked: false
  });
  get newItem$() {
    return this._newItem$;
  }

  private _todoList$ = new BehaviorSubject<TodolistItem[]>([]);
  get todolist$() {
    return this._todoList$;
  }
}
