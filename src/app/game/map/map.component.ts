import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'jr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

  closeAction: (() => void) | undefined;

  constructor(private readonly router: Router, private readonly gameService: GameService) { }

  canStart(arena: number): boolean {
    return this.gameService.canAccessArena(arena);
  }

  start(arena: number) {
    this.closeAction = () => this.router.navigate(['game', 'arena-setup', arena]);
  }

  onAvatars() {
    this.closeAction = () => this.router.navigateByUrl('/game/avatars');
  }

  onMonsters() {
    this.closeAction = () => this.router.navigateByUrl('/game/monsters');
  }

  onScore() {
    this.closeAction = () => this.router.navigateByUrl('/game/score');
  }

  onExit() {
    this.closeAction = () => this.router.navigateByUrl('/menu');
  }
}
