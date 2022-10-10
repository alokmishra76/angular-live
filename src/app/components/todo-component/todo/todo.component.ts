import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { TodoList } from 'src/app/service/todo.service.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoList[] = [];
  todoDesc: any = "";
  todoForm!: FormGroup;
  makeInputFieldFocus: boolean = false;

  @ViewChild('inputFiled') inputFiled:ElementRef;

  constructor(
    private todo_service: TodoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("data", this.todoList);
    this.todoForm = this.fb.group({
      taskName: []
   });

   this.todo_service.isInputFocus.subscribe((data) => {
     this.makeInputFieldFocus = data;
     if(this.makeInputFieldFocus) {
      this.inputFiled.nativeElement.focus();
     }
   })
   
  }

  public addTodo() {
    this.todo_service.addTodoList(this.todoForm.value.taskName)
    // this.todoForm.setValue({
      
    // })
  }

}
