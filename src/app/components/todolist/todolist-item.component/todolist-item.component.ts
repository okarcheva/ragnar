import { Component, Input, OnInit } from '@angular/core';
import { TodolistItem } from 'app/components/todolist/todolist-item.component/todolist-item';

@Component({
  selector: 'todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss']
})
export class TodolistItemComponent implements OnInit {

  @Input() todolistItem: TodolistItem = {
    description: 'test description',
    isChecked: true
  };

  constructor() { }

  ngOnInit() {
  }

}