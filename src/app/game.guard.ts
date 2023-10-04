import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GameService } from './game.service';

export const gameGuard: CanActivateFn = (route, state) => {
  const gameService = inject(GameService);
  if (!gameService.hasGame) {
    if (gameService.hasSavedGame) {
      gameService.loadGame();
    } else {
      gameService.newGame();
    }
  }
  return true;
};
