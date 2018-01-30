import { Component } from '@angular/core';
import { AddButtonClickedAction } from 'app/actions/todolist/add-button-clicked.action';

@Component({
  selector: 'todolist-input-section',
  templateUrl: './todolist-input-section.component.html',
  styleUrls: ['./todolist-input-section.component.scss']
})
export class TodolistInputSectionComponent {
  description: string;

  constructor(
    private addButtonClickedAction: AddButtonClickedAction
  ) {
  }

  get isAddDisabled() {
    return this.description === '';
  }

  addButtonClicked() {
    this.addButtonClickedAction.execute(this.description);
    this.description = '';
  }
}