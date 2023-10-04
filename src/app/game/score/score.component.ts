import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router) { }

  onBack() {
    this.closeAction = () => this.router.navigateByUrl('/game');
  }
}
