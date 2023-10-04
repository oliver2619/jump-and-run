import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'jr-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArenaComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvas: ElementRef<HTMLCanvasElement> | undefined;

  ngAfterViewInit(): void {
    if(this.canvas != undefined) {
      const context = this.canvas.nativeElement.getContext('2d', {alpha: false});
    }
  }
}
