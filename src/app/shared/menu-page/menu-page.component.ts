import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jr-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPageComponent implements OnChanges {

  @Input('close-action')
  closeAction: (() => void) | undefined;

  @Input('fading')
  fading = false;

  get mustClose(): boolean {
    return this.closeAction != undefined;
  }

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  onAnimationEnd() {
    if (this.closeAction != undefined) {
      this.closeAction();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['fading'] != undefined) {
      if(this.fading) {
        this.host.nativeElement.classList.add('fading');
      }else {
        this.host.nativeElement.classList.remove('fading');
      }
    }
  }
}
