import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoBoardComponent } from './components/to-do-board/to-do-board.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoBoardComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
