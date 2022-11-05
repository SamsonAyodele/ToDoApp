import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/to-do-item';


@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.css']
})

export class ToDoBoardComponent implements OnInit {


  toDoObj : ToDoItem = new ToDoItem();
  editToDoObj : string = '';
  addToDoValue : string = '';
  toDoItem : string = '';
  toDoArr : any = [];
  searchInput:string='';
  constructor() { }


  ngOnInit(): void {
    this.toDoArr = [];
    this.getAllTask();
    this.editToDoObj = '';
    this.addToDoValue = '';
    this.editTask();
    this.toDoObj = new ToDoItem
  }

  getAllTask() {
   var todos = localStorage.getItem('todos') ;
   if(todos == null) this.toDoArr=[];
   this.toDoArr = JSON.parse(todos || '[]');

  }

  addTask() {
    this.toDoObj.toDo_message = this.addToDoValue;
    this.toDoObj.id= Math.floor(Math.random() * 100);
    this.toDoArr.push(this.toDoObj);
    localStorage.setItem('todos', JSON.stringify(this.toDoArr));
    this.addToDoValue ='';
    this.getAllTask();

  }

  editTask() {
    this.toDoObj.toDo_message = this.editToDoObj;
    // this.editToDoObj = '';
  }


  onComplete(etask : ToDoItem, index:number) {

    this.toDoArr.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(this.toDoArr));
  }


  call( todo : ToDoItem ) {
    this.toDoObj = todo;
    this.editToDoObj = todo.toDo_message;
  }
}
