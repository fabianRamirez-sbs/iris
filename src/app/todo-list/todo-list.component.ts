import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../core/services/todo-list.service';
import { TodoList } from '../core/models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  list: TodoList[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.list = this.todoListService.getTodoList();
  }
}
