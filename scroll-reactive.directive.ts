import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Directive({
  selector: '[scrollReactive]'
})
export class ScrollReactiveDirective implements OnInit{

  lastScrollPosition:number = 0;
  initialValue:any = 0;
  @Input() speed: number = 0.2;
  @Input('scrollReactive') property: string;

  constructor(
    private scroll:ScrollDispatcher,
    private elem:ElementRef
  ) {
    let lastScrollPosition = 0;
    scroll.ancestorScrolled(elem).subscribe( ()=>{
      // if(elem.nativeElement.getBoundingClientRect())
      console.log(elem.nativeElement.getBoundingClientRect());
      let distance = window.scrollY - lastScrollPosition;
      lastScrollPosition = window.scrollY;
      this.move(elem, distance);
    })
  }

  ngOnInit(){
    let css = window.getComputedStyle(this.elem.nativeElement);
    let initialValueString = css.getPropertyValue(this.property);
    this.initialValue = parseInt(initialValueString.split('px')[0]);
  }

  move(elem, distance){
    elem.nativeElement.style= this.property+': '+parseInt(this.initialValue+=(distance*this.speed))+'px;';
    console.log(this.initialValue);
  }
}
