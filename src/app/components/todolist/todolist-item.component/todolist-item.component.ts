import { Component, Input } from '@angular/core';
import { CheckboxValueChangedAction } from 'app/actions/todolist/checkbox-value-changed.action';
import { ItemCloseIconClickedAction } from 'app/actions/todolist/item-close-icon-clicked.action';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent {
  @Input() todolistItem: TodolistItem;

  constructor(
    private checkboxValueChangedAction: CheckboxValueChangedAction,
    private itemCloseIconClickedAction: ItemCloseIconClickedAction, 
  ) {}

  checkboxValueChanged() {
    this.todolistItem.isChecked = !this.todolistItem.isChecked;
    this.checkboxValueChangedAction.execute(this.todolistItem);
  }

  closeIconClicked() {
    this.itemCloseIconClickedAction.execute(this.todolistItem);
  }
}
