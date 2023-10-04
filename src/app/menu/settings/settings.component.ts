import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router) { }

  onBack() {
    this.closeAction = () => this.router.navigateByUrl('/menu');
  }
}
