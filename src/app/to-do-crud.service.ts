import { Observable } from 'rxjs';
// // import { ToDoCrudService } from './to-do-crud.service';
// import { ToDoItem } from './to-do-item';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDoItem } from './to-do-item';
// import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ToDoCrudService {

  toDoObj: any
  private toDoObj$ = new BehaviorSubject<ToDoItem[]>([])

  public toDoItems$ = this.toDoObj$.asObservable();

  toDoArr: ToDoItem[] = [];
  // getToDoItem(): Observable<ToDoItem> {
  //   return this.toDoItems


  constructor() {}



//   addTask( task : ToDoItem) {
//     return this.http.post<ToDoItem>(this.serviceURL, task)
//   }

//   getAllTask()  {
//     return this.http.get<ToDoItem[]>(this.serviceURL)
//   }

//   getTask(task : ToDoItem) : Observable<ToDoItem> {
//     return this.http.get<ToDoItem>(this.serviceURL+'/'+ task.toDo_message)
//   }

//   deleteTask( task : ToDoItem)  {
//     return this.http.delete<ToDoItem>(`this.serviceURL${task.id}`)
//   }

//   editTask( task : ToDoItem)  {
//     return this.http.put<ToDoItem>(`this.serviceURL${task.id}`, task)
//   }
}
