import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-arena-completion',
  templateUrl: './arena-completion.component.html',
  styleUrls: ['./arena-completion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArenaCompletionComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router) { }

  onContinue() {
    this.closeAction = () =>
      this.router.navigateByUrl('/game');
  }
}
