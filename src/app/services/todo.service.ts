import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todo: TodoModel[] = [];

  constructor() {
    this.addTodo('todo1');
    this.addTodo('todo2');
    this.addTodo('todo3');
    this.toggleCompleted(2);
  }

  addTodo(myTodo: string) {
    let id = this.todo.length + 1;

    this.todo.push({
      id,
      todo: myTodo,
      completed: false,
    });
  }

  toggleCompleted(id: number) {
    let todo = this.todo.filter((x) => x.id === id);

    if (todo.length > 0) {
      todo[0].completed = !todo[0].completed;
      this.todo = [...this.todo.filter((x) => x.id !== id), ...todo];
    }
  }

  getTodo() {
    return this.todo;
  }
}
