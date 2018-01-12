import { NgModule } from '@angular/core';
import { HomeServerUpdatedAction } from 'app/actions/home/home-server-updated.action';
import { HomeUpdatedAction } from 'app/actions/home/home-updated.action';
import { ActiveFilterClickedAction } from 'app/actions/todolist/active-filter-clicked.action';
import { AddButtonClickedAction } from 'app/actions/todolist/add-button-clicked-action';
import { AllFilterClickedAction } from 'app/actions/todolist/all-filter-clicked.action';
import { CheckboxValueChangedAction } from 'app/actions/todolist/checkbox-value-changed.action';
import { ClearCompletedButtonClickedAction } from 'app/actions/todolist/clear-completed-button-clicked.action';
import { CompletedFilterClickedAction } from 'app/actions/todolist/completed-filter-clicked.action';
import { InputValueChangedAction } from 'app/actions/todolist/input-value-changed.action';
import { ItemCloseIconClickedAction } from 'app/actions/todolist/item-close-icon-clicked.action';

@NgModule({
  providers: [
    HomeUpdatedAction,
    HomeServerUpdatedAction,
    AddButtonClickedAction,
    InputValueChangedAction,
    CheckboxValueChangedAction,
    ItemCloseIconClickedAction,
    ActiveFilterClickedAction,
    CompletedFilterClickedAction,
    AllFilterClickedAction,
    ClearCompletedButtonClickedAction
  ]
})
export class ActionsModule {}
