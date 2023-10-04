import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'jr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  closeAction: (() => void) | undefined;

  get continueEnabled(): boolean {
    return this.gameService.hasSavedGame;
  }

  constructor(private readonly router: Router, private readonly gameService: GameService) { }

  onNew() {
    if (this.gameService.hasSavedGame) {
      this.closeAction = () => this.router.navigateByUrl('/menu/new');
    } else {
      this.closeAction = () => {
        this.gameService.newGame();
        this.router.navigateByUrl('/game');
      };
    }
  }

  onContinue() {
    this.closeAction = () => {
      this.gameService.loadGame();
      this.router.navigateByUrl('/game');
    };
  }

  onSettings() {
    this.closeAction = () => this.router.navigateByUrl('/menu/settings');
  }

  onCredits() {
    this.closeAction = () => this.router.navigateByUrl('/menu/credits');
  }
}
