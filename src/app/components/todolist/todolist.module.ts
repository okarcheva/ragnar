import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TodolistButtonsContainerComponent } from 'app/components/todolist/todolist-buttons-container.component/todolist-buttons-container.component';
import { TodolistInputSectionComponent } from 'app/components/todolist/todolist-input-section.component/todolist-input-section.component';
import { TodolistItemComponent } from 'app/components/todolist/todolist-item.component/todolist-item.component';
import { TodolistComponent } from './todolist.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [TodolistComponent],
  declarations: [
    TodolistComponent,
    TodolistItemComponent,
    TodolistInputSectionComponent,
    TodolistButtonsContainerComponent]
})
export class TodolistModule {}