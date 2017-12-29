import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHostbinding]'
})
export class BetterHostbindingDirective {
  @Input() defaultBGColor: string = 'transparent';
  @Input() heighlightBGColor: string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBGColor;
  @HostBinding('style.color') color: string = 'black';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultBGColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.heighlightBGColor;
    this.color = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBGColor;
    this.color = 'black';
  }

}
