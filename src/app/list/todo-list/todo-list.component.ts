import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { TodoList } from 'src/app/service/todo.service.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: TodoList[] = []

  constructor(
    private todo_service: TodoService
  ) { }

  ngOnInit(): void {
    this.todoList = this.todo_service.getTodoList();
  }

  private getTodoList() {
    this.todoList = this.todo_service.getTodoList();
  }

  public deleteTodo(id: number) {
    this.todo_service.deleteTodo(id);
    this.getTodoList();
  }

  public updateTodo(data: any) {
   this.todo_service.updateTodoList(data);
  }

  public getCheckedData(e: any, item:any) {
    console.log("event", e.target.checked, item);
    this.todo_service.markCompleted(e.target.checked, item)
  }

  public makeInputFieldFocus() {
    this.todo_service.isInputFocus.next(true);
  }

}
