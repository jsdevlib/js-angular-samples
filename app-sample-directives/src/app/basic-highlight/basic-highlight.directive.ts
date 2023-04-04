import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
