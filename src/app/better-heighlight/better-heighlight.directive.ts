import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener 
} from '@angular/core';

@Directive({
  selector: '[appBetterHeighlight]'
})
export class BetterHeighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color','white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color','black');
  }

}
