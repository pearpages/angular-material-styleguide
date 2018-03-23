import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: 'a' })
export class ExternalLinksDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    if (!!this.elementRef.nativeElement.href) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'rel', 'noopener noreferrer nofollow');
      this.renderer.setAttribute(this.elementRef.nativeElement, 'target', '_blank');
    }
  }
}
