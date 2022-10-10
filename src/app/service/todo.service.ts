import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoList } from './todo.service.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: TodoList[] = [
    {
      id: 1,
      taskName: "task1",
      isCompleted: false
    }
  ]

  isInputFocus = new BehaviorSubject(false);

  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  addTodoList(data: any) {
    console.log("data", data);
    let newData: TodoList = {
      id: Math.floor(Math.random() * 100),
      taskName: data,
      isCompleted: false
    }
    this.todoList.push(newData)
    console.log("data", this.todoList)
  }

  updateTodoList(updatedData: any) {
    this.todoList = this.todoList.map((data) => {
      if(data.id === updatedData.id) {
        return {
          ...data,
          taskName: updatedData.taskName
        }
      } else return data;
    })

    console.log("updatedData", this.todoList)
  }

  deleteTodo(id: any) {
    this.todoList = this.todoList.filter(data => data.id !== id);
  }

  markCompleted(checked: any, data: any) {
    console.log(checked, data)
    this.todoList = this.todoList.map((item) => {
      if(item.id === data.id) {
        return {
          ...item,
          isCompleted: checked
        }
      } else return item;
    })
    console.log("checkedItem", this.todoList)
  }
}
