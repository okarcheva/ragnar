import { Component, Input } from '@angular/core';
import { ActiveFilterClickedAction } from 'app/actions/todolist/active-filter-clicked.action';
import { AllFilterClickedAction } from 'app/actions/todolist/all-filter-clicked.action';
import { ClearCompletedButtonClickedAction } from 'app/actions/todolist/clear-completed-button-clicked.action';
import { CompletedFilterClickedAction } from 'app/actions/todolist/completed-filter-clicked.action';

@Component({
  selector: 'todolist-buttons-container',
  templateUrl: './todolist-buttons-container.component.html',
  styleUrls: ['./todolist-buttons-container.component.scss']
})
export class TodolistButtonsContainerComponent {
  @Input() isAllFilterOn: boolean;
  @Input() isActiveFilterOn: boolean;
  @Input() isCompletedFilterOn: boolean;
  @Input() isClearCompletedDisabled: boolean;
  
  constructor(
    private activeFilterClickedAction: ActiveFilterClickedAction,
    private completedFilterClickedAction: CompletedFilterClickedAction,
    private allFilterClickedAction: AllFilterClickedAction,
    private clearCompletedButtonClickedAction: ClearCompletedButtonClickedAction
  ) {
  }

  activeFilterClicked() {
    this.activeFilterClickedAction.execute();
  }

  completedFilterClicked() {
    this.completedFilterClickedAction.execute();
  }

  allFilterClicked() {
    this.allFilterClickedAction.execute();
  }

  clearCompletedButtonClicked() {
    this.clearCompletedButtonClickedAction.execute();
  }
}