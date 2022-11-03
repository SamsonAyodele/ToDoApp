import { ToDoItem } from './../../to-do-item';
import { ToDoCrudService } from './../../to-do-crud.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-do-board',
  templateUrl: './to-do-board.component.html',
  styleUrls: ['./to-do-board.component.css']
})
export class ToDoBoardComponent implements OnInit {


  toDoObj : ToDoItem = new ToDoItem();
  toDoArr : ToDoItem[] = [];
  editToDoValue : string = '';
  addToDoValue : string = '';
  // getToDoValue : string = '';
  constructor(private crudService : ToDoCrudService) { }


  ngOnInit(): void {
    this.addToDoValue = '';
    this.editToDoValue = '';
    this.toDoObj = new ToDoItem();
    this.toDoArr = [];
    this.getAllTask();
    // this.getTask();
  }

  getAllTask() {
    this.crudService.getAllTask() .subscribe(res => {
      this.toDoArr = res;
    // }, err => {
    //   alert('unable to get list')
    localStorage.getItem(JSON.parse('ToDoItem'))
    })
  }

  addTask() {
    this.toDoObj.toDo_message = this.addToDoValue;
    this.crudService.addTask(this.toDoObj) .subscribe(res => {
      this.ngOnInit();
      this.addToDoValue = '';
    // }, err => {
    //   alert(err)
    localStorage.setItem('ToDoItem', JSON.stringify(this.toDoObj.toDo_message))
    })
  }

  editTask() {
    this.toDoObj.toDo_message = this.editToDoValue
    this.crudService.editTask(this.toDoObj) .subscribe(res => {
      this.ngOnInit();
      // }, err => {
      //  alert('failed to update task')
    })
  }

  onComplete(etask : ToDoItem) {
    this.crudService.deleteTask(etask) .subscribe(res => {
      this.ngOnInit();
      localStorage.removeItem('ToDoItem')
    })
  }

  // getTask() {
  //   this.toDoObj.toDo_message = this.getToDoValue
  //   this.crudService.getTask(this.toDoObj) .subscribe(res => {
  //     this.toDoObj = res
  //     this.ngOnInit();
  //   })
  // }

  call(etask : ToDoItem) {
    this.toDoObj = etask;
    this.editToDoValue = etask.toDo_message
  }
}
