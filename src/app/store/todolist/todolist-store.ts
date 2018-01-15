import { TodolistFilter } from 'app/components/todolist/todolist-enums';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';
import { BehaviorSubject } from 'rxjs';

export class TodolistStore {
  readonly todolist$ = new BehaviorSubject<TodolistItem[]>([]);
  readonly todoListFiltered$ = new BehaviorSubject<TodolistItem[]>([]);
  readonly idCounter$ = new BehaviorSubject<number>(0);  
  readonly filterValue$ = new BehaviorSubject<TodolistFilter>(TodolistFilter.All);
  readonly isActiveFilterOn$ = new BehaviorSubject<boolean>(false);
  readonly isAllFilterOn$ = new BehaviorSubject<boolean>(true);
  readonly isCompletedFilterOn$ = new BehaviorSubject<boolean>(false);
  readonly isClearCompletedDisabled$ = new BehaviorSubject<boolean>(true);
}
