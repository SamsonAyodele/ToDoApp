export class ToDoItem {
  id : number = 0;
  toDo_message : string = '';
  isComplete : boolean = false;
  dueDate:Date = new Date();
  completedOn?:Date;
}


