import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jr-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarsComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router) { }

  onBack() {
    this.closeAction = () => this.router.navigateByUrl('/game');
  }
}
