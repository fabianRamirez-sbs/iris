import { Injectable } from '@angular/core';

import { TodoList } from './models/todo-list';
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}
  todoList: TodoList[] = [];

  getTodoList() {
    return this.todoList;
  }
  postTodoList(data: string) {
    const newData = {
      id: new Date().getMinutes(),
      title: data,
    };
    this.todoList.push(newData);
  }
}
