import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color:string;
  constructor(private el:ElementRef) {
    console.log(this.color)
  }

 
  //  @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('cyan');
  //  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }

  private highlight(color){
    this.el.nativeElement.style.backgroundColor = this.color;
  }


}
