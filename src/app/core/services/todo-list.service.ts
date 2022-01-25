import { Injectable } from '@angular/core';

import { TodoList } from '../models/todo-list';
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}
  todoList: TodoList[] = [
    {
      id: 1,
      title: 'Hello World.',
    },
  ];

  getTodoList() {
    return this.todoList;
  }
  getItemList(title: string) {
    console.log(this.todoList.find((item) => title === item.title));
    return this.todoList.find((item) => title === item.title);
  }
  deleteItemList(idDelete: number) {
    const newArray = this.todoList.filter((item) => item.id !== idDelete);
    this.todoList = newArray;
    return this.todoList;
  }
  postTodoList(data: string) {
    const newData = {
      id: new Date().getSeconds(),
      title: data,
    };
    this.todoList.push(newData);
    return this.todoList;
  }
}
