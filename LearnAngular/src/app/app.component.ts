import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputVal: string = "";
  collectedData = [];

  ngIfStatus: boolean = true;
  ngIfStatus2: boolean = false;
  title: string  = "Learn Angular";
  imgSrc150: string = "https://via.placeholder.com/150";
  cs: number = 2;
  imgSrc250: string = "https://via.placeholder.com/250";
  imgSize:number = 250;
  class1 : string = "myClass";
  class2: string = "myClass2";
  boolTrue: boolean = true;
  style1: string = "5px solid black";
  style2: boolean = true;
  clicks:number = 0;
  twoWayData;
  newClass(){
    return true;
  }

  boolFunc(){return true;}

  newStyle(){
    return "lightblue";
  }

  onClick(event){
    console.log("button has been clicked " + ++this.clicks + " times!");
    console.log(event);
    this.twoWayData = event;
    this.collectedData.push(this.inputVal);
    this.inputVal = "";
    console.log(this.collectedData);
  }

  onEvent(event)
  {
    console.log("Evented me!");
    console.log(event);
  }
}
