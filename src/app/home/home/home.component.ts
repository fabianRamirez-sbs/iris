import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../../core/services/todo-list.service';
import { TodoList } from '../../core/models/todo-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  newitemList: string = '';
  list: TodoList[] = [];

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.list = this.todoListService.getTodoList();
  }

  deleteItem(id: number) {
    this.list = this.todoListService.deleteItemList(id);
  }

  addNewItem() {
    if (this.newitemList.length > 0) {
      this.list = this.todoListService.postTodoList(this.newitemList);
      this.newitemList = '';
    } else {
      alert('Ingresa una nueva tarea');
    }
  }
}
