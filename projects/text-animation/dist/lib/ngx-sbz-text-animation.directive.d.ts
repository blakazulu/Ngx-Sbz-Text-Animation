import {AfterViewInit, ElementRef, Renderer2} from '@angular/core';

export declare class NgxSbzTextAnimationDirective implements AfterViewInit {
  maxFontSize: number;
  colorSchemeArray: string[];
  position: 'left' | 'right';
  private elementRef;
  private renderer;
  private init;
  private animateBackground;

  constructor(elementRef: ElementRef, renderer: Renderer2);

  ngAfterViewInit(): void;
}

//# sourceMappingURL=ngx-sbz-text-animation.directive.d.ts.map
