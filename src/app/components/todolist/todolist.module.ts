import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { SharedModule } from 'app/components/shared/shared.module';
import { TodolistItemComponent } from 'app/components/todolist/todolist-item.component/todolist-item.component';
import { TodolistComponent } from './todolist.component';

@NgModule({
  imports: [SharedModule, FormsModule],
  exports: [TodolistComponent],
  declarations: [TodolistComponent, TodolistItemComponent]
})
export class TodolistModule {}