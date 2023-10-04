import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditsComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router) { }

  onBack() {
    this.closeAction = () => this.router.navigateByUrl('/menu');
  }
}
