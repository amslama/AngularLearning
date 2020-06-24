import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts;
  constructor(private http : HttpClient){
    let params = new HttpParams().set('userId', "1")
    this.http.get('https://jsonplaceholder.typicode.com/posts', {params} )
      .subscribe((value:any) => {
      this.posts = value;
      console.log(this.posts);
    });
    //No longer needed, but con use to see observable
    //console.log(this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1'));
  }
  title = 'covidApp';
}
