import { HomeStore } from 'app/store/home/home-store';
import { TodolistStore } from 'app/store/home/todolist-store';

export class Store {
  private _homeStore = new HomeStore();
  private _todolistStore = new TodolistStore();
  
  get homeStore(): HomeStore {
    return this._homeStore;
  }

  get todolistStore(): TodolistStore {
    return this._todolistStore;
  }
}
