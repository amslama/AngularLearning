import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  @Input() set appMyIf(condition : boolean){
    if(!condition)
    {
      this.viewContainer.clear();
    }
    else if(condition)
    {
      this.viewContainer.createEmbeddedView(this.viewTemplate)
    }
  }
  constructor(private viewTemplate:TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
