import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashComponent implements OnInit, OnDestroy {

  private timeout: number | undefined;

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
    this.timeout = window.setTimeout(() => {
      this.timeout = undefined;
      this.onPlay();
    }, 10000);
  }

  ngOnDestroy() {
    this.cancelTimeout();
  }

  onPlay() {
    this.cancelTimeout();
    this.router.navigateByUrl('/menu');
  }

  private cancelTimeout() {
    if (this.timeout != undefined) {
      window.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
  }
}
