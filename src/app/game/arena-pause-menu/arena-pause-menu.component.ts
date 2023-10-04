import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'jr-arena-pause-menu',
  templateUrl: './arena-pause-menu.component.html',
  styleUrls: ['./arena-pause-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArenaPauseMenuComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly gameService: GameService, private readonly router: Router) { }

  onAbort() {
    this.closeAction = () => {
      this.router.navigateByUrl('/game');
      this.gameService.abortArena();
    };
  }

  onContinue() {
    this.closeAction = () => {
      this.router.navigateByUrl('/game/arena');
      this.gameService.continueArena();
    };
  }
}
