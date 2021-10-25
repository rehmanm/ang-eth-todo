import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  completedTodos: TodoModel[] = [];
  todos: TodoModel[] = [];
  todoForm: FormGroup;
  validationMessages = {
    todo: [{ type: 'required', message: 'Todo is required' }],
  };

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    console.log('contructor called todo');

    this.todoForm = this.fb.group({
      todo: new FormControl('', Validators.compose([Validators.required])),
    });
    this.getTodo();
  }
  getTodo() {
    this.todoForm.reset();
    let todoList = this.todoService.getTodo();

    this.completedTodos = todoList.filter((x) => x.completed === true);
    this.todos = todoList.filter((x) => x.completed === false);
  }

  ngOnInit(): void {}

  addtodo(event: any) {
    event.preventDefault();
    if (this.todoForm.dirty && this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value.todo);
      this.getTodo();
    }
  }

  toggleComplete(id: number) {
    this.todoService.toggleCompleted(id);
    this.getTodo();
  }
}
