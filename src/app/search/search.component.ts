import { SearchPipe } from './search.pipe';
import { Component, Input, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



     searchInput: string = '';

     toDoArr : any = [];


  @Input() items : any = [];
  constructor() { }

  ngOnInit(): void {
    this.toDoArr = this.items;
  }

}
