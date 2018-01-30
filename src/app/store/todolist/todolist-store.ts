import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { TodolistFilter } from 'app/models/todolist/todolist-enums';
import { BehaviorSubject } from 'rxjs';

export class TodolistStore {
  readonly todolist$ = new BehaviorSubject<TodolistItem[]>([]);
  readonly todoListFiltered$ = new BehaviorSubject<TodolistItem[]>([]);
  readonly idCounter$ = new BehaviorSubject<number>(0);  
  readonly filterValue$ = new BehaviorSubject<TodolistFilter>(TodolistFilter.All);
  readonly isClearCompletedDisabled$ = new BehaviorSubject<boolean>(true);
}
