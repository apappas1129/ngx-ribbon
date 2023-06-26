import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ngx-ribbon',
  template: `
    <div
      class="ribbon ribbon-{{ position }}"
      [style.cursor]="clicked.observed ? 'pointer' : 'default'"
      [style.transform]="transform"
      (click)="this.clicked.emit()"
    >
      <div class="ribbon-label">
        <span>{{ label }}</span>
      </div>
    </div>
  `,
  styleUrls: ['ngx-ribbon.component.scss'],
})
export class NgxRibbonComponent implements AfterViewInit {
  @Input() label?: string;
  @Input() position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' =
    'top-left';
  /** Applies `transform: scale(amount)` */
  @Input() scale?: number;
  @Output() clicked = new EventEmitter<void>();

  get transform() {
    return this.scale ? `scale(${this.scale})` : null;
  }
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
     private el: ElementRef
     ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    // Force parent element to have position relative so that the ribbon's
    // offset, using position absolute, is secured in the correct intended place.
    const parent = this.el.nativeElement.parentNode;
    if (parent) this.renderer.setStyle(parent, 'position', 'relative');
  }
}
