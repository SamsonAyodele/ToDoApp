import { ToDoItem } from 'src/app/to-do-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})

// toDoArr : any = [];

export class SearchPipe implements PipeTransform {

    transform(toDoObj: ToDoItem[], searchInput: string): any[]{
      // var search = localStorage.getItem('todos')
        if(!searchInput) {
            return toDoObj;
        } else {
          searchInput = searchInput.toLowerCase();
          return toDoObj.filter(
              x =>x.toDo_message.toLowerCase().includes(searchInput)
          )
        }

     }
}
