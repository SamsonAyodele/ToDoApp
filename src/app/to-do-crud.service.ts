// import { ToDoCrudService } from './to-do-crud.service';
import { ToDoItem } from './to-do-item';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoCrudService {


  serviceURL : string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/todos'
  }


  addTask( task : ToDoItem) : Observable<ToDoItem>{
    return this.http.post<ToDoItem>(this.serviceURL, task)
  }

  getAllTask() : Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(this.serviceURL)
  }

  // getTask(task : ToDoItem) : Observable<ToDoItem> {
  //   return this.http.get<ToDoItem>(this.serviceURL+'/'+ task.toDo_message)
  // }

  deleteTask( task : ToDoItem) : Observable<ToDoItem> {
    return this.http.delete<ToDoItem>(this.serviceURL+'/'+ task.id)
  }

  editTask( task : ToDoItem) : Observable<ToDoItem> {
    return this.http.put<ToDoItem>(this.serviceURL+'/'+ task.id, task)
  }
}
