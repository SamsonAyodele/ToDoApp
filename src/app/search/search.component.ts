import { SearchPipe } from './search.pipe';
import { Component, Input, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // title = 'instant-search';

     searchInput: string = '';

     toDoArr : any = [];

    //  SearchPipe = Pipe
  //   public programmingLanguages = [
  //     'Python','TypeScript','C','C++','Java',
  //     'Go','JavaScript','PHP','Ruby','Swift','Kotlin'
  //  ]
  @Input() items:any=[];
  constructor() { }

  ngOnInit(): void {
    this.toDoArr = this.items;
  }

}
