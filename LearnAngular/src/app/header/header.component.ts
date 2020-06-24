import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changer = new EventEmitter();
  @Input() getInput:string;
c = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.getInput + ", but printed in header.component.ts");
  }

  changerFunc()
  {
    this.c += 1;
    this.changer.emit(this.c);
  }
}
