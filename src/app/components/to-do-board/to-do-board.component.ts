import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoCrudService } from 'src/app/to-do-crud.service';
import { ToDoItem } from 'src/app/to-do-item';


@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.css']
})

export class ToDoBoardComponent implements OnInit {



  toDoObj : ToDoItem = new ToDoItem();
  completedTasks:any= [];
  editToDoObj : string = '';
  addToDoValue : string = '';
  deleteToDoValue : string = '';
  completeToDoItem : string = '';
  toDoItem : string = '';
  toDoArr : any = [];
  searchInput : string = '';
  currentTask : ToDoItem = new ToDoItem();
  dueDate = new Date()

  constructor(private todoService: ToDoCrudService) { }

  toDoItems$ = Observable<ToDoItem[]>;

  ngOnInit(): void {
    // this.toDoItems$ = this.todoService.toDoItems$
    this.toDoArr = [];
    this.getAllTask();
    this.editToDoObj = '';
    this.addToDoValue = '';
    this.editTask();
    this.toDoObj = new ToDoItem
    this.deleteToDoValue  = '';
    this.completeToDoItem = '';
    this.getCompletedTasks();

  }

  getAllTask() {
  //  var todos = localStorage.getItem('todos');
  var todos = this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
   if(todos == null) this.toDoArr=[];
   this.toDoArr = JSON.parse(todos || '[]');

  }

  getCompletedTasks(){
    // var todos = localStorage.getItem('completedTodos') ;
    var todos = this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
   if(todos == null) this.toDoArr=[];
   this.completedTasks = JSON.parse(todos || '[]');
  }

  addTask() {
    this.toDoObj.toDo_message = this.addToDoValue;
    this.toDoObj.id= Math.floor(Math.random() * 100);
    this.toDoArr.push(this.toDoObj);
    // localStorage.setItem('todos', JSON.stringify(this.toDoArr));
    this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
    this.addToDoValue ='';
    this.dueDate = new Date();
    this.getAllTask();

  }

  editTask() {
    this.toDoObj.toDo_message = this.editToDoObj;
    // this.editToDoObj = '';
  }


  onComplete(task : ToDoItem, index:number) {
    this.toDoObj.toDo_message = this.completeToDoItem
    let todo = this.toDoArr.filter((x:ToDoItem )=> x.id === task.id)[0];
    // console.log(todo);
    if(todo != null) {
      todo.isComplete = true;
      todo.completedOn = new Date();
      this.completedTasks.push(todo);
      this.toDoArr.splice(index,1);
      this.updateTodoStore();
      this.updateCompletedTasksStore();
      // this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
    }else{
      console.log("something",task);
    }
  }

  updateTodoStore(){
    // localStorage.setItem('todos', JSON.stringify(this.toDoArr));
    this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
  }
  updateCompletedTasksStore(){
    // localStorage.setItem('completedTodos', JSON.stringify(this.completedTasks));
    this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
  }

  markAsNotDone(task : ToDoItem, i:number) {
    this.toDoArr.push(task);
    this.updateTodoStore();
    this.completedTasks.splice(i,1);
    this.updateCompletedTasksStore();
    // this.todoService.toDoObj.next(Object.assign([], this.todoService.toDoArr))
  }


  call( todo : ToDoItem ): void {
    this.toDoObj = todo;
    this.editToDoObj = todo.toDo_message;
  }

  viewTask(task : ToDoItem){
    this.currentTask = task;
  }
}
