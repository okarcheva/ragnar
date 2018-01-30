import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent {
  @Input() todolistItem: TodolistItem;
  @Output() onCheckboxChange = new EventEmitter<TodolistItem>();
  @Output() onCloseIconClick = new EventEmitter<TodolistItem>();

  constructor() {}

  checkboxValueChanged() {
    this.todolistItem.isChecked = !this.todolistItem.isChecked;
    this.onCheckboxChange.emit(this.todolistItem);
  }

  closeIconClicked() {
    this.onCloseIconClick.emit(this.todolistItem);
  }
}
