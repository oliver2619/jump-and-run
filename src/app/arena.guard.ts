import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameService } from './game.service';

export const arenaGuard: CanActivateFn = (route, state) => {
  const gameService = inject(GameService);
  if (route.url[0].path === 'arena-setup') {
    const arena = route.params['arena'];
    if (arena != undefined && !gameService.canAccessArena(Number(arena))) {
      return inject(Router).createUrlTree(['game']);
    }
  }
  return true;
};
