import { HomeStore } from 'app/store/home/home-store';
import { TodolistStore } from 'app/store/todolist/todolist-store';

export class Store {
  readonly homeStore = new HomeStore();
  readonly todolistStore = new TodolistStore();
}
