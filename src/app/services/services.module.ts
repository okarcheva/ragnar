import { NgModule } from '@angular/core';
import { NumberService } from 'app/services/number.service';
import { TodolistService } from 'app/services/todolist.service';

@NgModule({
  providers: [
    NumberService,
    TodolistService
  ]
})
export class ServicesModule {}
