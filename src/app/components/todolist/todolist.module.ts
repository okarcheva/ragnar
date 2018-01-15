import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TodolistItemComponent } from 'app/components/todolist/todolist-item.component/todolist-item.component';
import { TodolistComponent } from './todolist.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [TodolistComponent],
  declarations: [TodolistComponent, TodolistItemComponent]
})
export class TodolistModule {}