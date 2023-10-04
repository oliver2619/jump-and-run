import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'jr-count-up-value',
  templateUrl: './count-up-value.component.html',
  styleUrls: ['./count-up-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountUpValueComponent implements AfterViewInit, OnDestroy {

  @Input('value')
  value: number = 0;

  @Input('step')
  step: number = 1;

  current: number = 0;

  private timer: number | undefined;

  constructor(private readonly host: ElementRef<HTMLElement>, private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.timer = window.setInterval(() => {
      this.current += this.step;
      if (this.current >= this.value) {
        this.current = this.value;
        window.clearInterval(this.timer);
        this.timer = undefined;
        this.host.nativeElement.classList.add('finished');
      }
      this.changeDetectorRef.markForCheck();
    }, 20);
  }

  ngOnDestroy() {
    if (this.timer != undefined) {
      window.clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}
