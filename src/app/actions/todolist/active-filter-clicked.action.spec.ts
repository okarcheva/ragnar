import { TodolistFilter } from './../../components/todolist/todolist-enums';
import { Store } from './../../store/store';
import { TodolistStore } from './../../store/todolist/todolist-store';
import { ActiveFilterClickedAction } from './active-filter-clicked.action';

describe('ActiveFilterClickedAction', () => {
  describe('execute', () => {
    it('sets filterValue$ to Active', async() => {
      const store = new Store();
      store.todolistStore.filterValue$.next(TodolistFilter.All);     
      let action = new ActiveFilterClickedAction(store);

      await action.execute();

      expect(store.todolistStore.filterValue$.getValue()).toEqual(TodolistFilter.Active);
    });

  });
});