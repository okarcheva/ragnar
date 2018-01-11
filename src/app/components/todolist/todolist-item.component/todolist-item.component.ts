import { Component, Input } from '@angular/core';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent {

  @Input() todolistItem: TodolistItem;
  @Input() onCheckboxChange: (changedItem: TodolistItem) => void;
  @Input() onCloseIconClick: (removedItem: TodolistItem) => void;

  constructor() { }

  checkboxValueChanged() {
    this.todolistItem.isChecked = !this.todolistItem.isChecked;
    if (typeof this.onCheckboxChange === 'function') {
      this.onCheckboxChange(this.todolistItem);
    }
  }

  closeIconClicked() {
    if (typeof this.onCloseIconClick === 'function') {
      this.onCloseIconClick(this.todolistItem);
    }
  }

}