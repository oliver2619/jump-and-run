import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonstersComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router) { }

  onBack() {
    this.closeAction = () => this.router.navigateByUrl('/game');
  }
}
