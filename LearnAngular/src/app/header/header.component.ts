import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() getInput:string;

  constructor() { }

  ngOnInit() {
    console.log(this.getInput + ", but printed in header.component.ts");
  }

}
