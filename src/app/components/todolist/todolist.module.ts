import { NgModule } from '@angular/core';
import { TodolistComponent } from './todolist.component';

@NgModule({
  exports: [TodolistComponent],
  declarations: [TodolistComponent]
})
export class TodolistModule {}
