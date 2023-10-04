import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'jr-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router, private readonly gameService: GameService) { }

  onCancel() {
    this.closeAction = () =>
      this.router.navigateByUrl('/menu');
  }

  onStart() {
    this.closeAction = () => {
      this.gameService.newGame();
      this.router.navigateByUrl('/game');
    };
  }
}
