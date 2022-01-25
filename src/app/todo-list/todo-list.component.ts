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

  Searchitem: string = "Hello World.";
  list: TodoList[] = [];
  searchItems:any = {};

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.list = this.todoListService.getTodoList();
  }

  searchItem() {
     if (this.Searchitem.length > 0) {
       this.searchItems = this.todoListService.getItemList(this.Searchitem);
     } else {
       alert('No results');
     }
  }
}
