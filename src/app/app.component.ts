import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Terragon';
  loader = true;
  public jokes;
  constructor(
    private appService :AppService
  ){

  }

  ngOnInit(){
   this.delayApi(); 
    this.getJokes();

  }

  delayApi(){
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }

  getJokes() {
    this.appService.getDryJoke()
      .subscribe((data) => {
        this.jokes = data;
        console.log('Jokes', this.jokes);
      })
  }
}
