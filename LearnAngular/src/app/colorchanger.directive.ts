import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchanger]'
})
export class ColorchangerDirective implements OnInit {
@Input() bgColor : string;
@Input() txtColor : string;
@HostListener('mouseenter') onMouseEnter(){
  this.el.nativeElement.style.color = this.txtColor;
  this.el.nativeElement.style.backgroundColor = this.bgColor; 
}
@HostListener('mouseleave') onMouseLeave()
{
  this.el.nativeElement.style.color = "red";
  this.el.nativeElement.style.backgroundColor = "lightblue"; 
}
  constructor(private el:ElementRef) {
    console.log("This is the directive");
  }
  ngOnInit()
  { 
    this.el.nativeElement.style.color = "red";
    this.el.nativeElement.style.backgroundColor = "lightblue"; 
  }
}
