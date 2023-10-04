import { Injectable } from '@angular/core';
import { Game } from 'src/model/game';
import { LocalStorageService } from './shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private static readonly LOCAL_STORAGE_KEY = 'game';

  private _game: Game | undefined;

  get hasGame(): boolean {
    return this._game != undefined;
  }

  get hasSavedGame(): boolean {
    return this.localStorageService.hasElement(GameService.LOCAL_STORAGE_KEY);
  }

  private get game(): Game {
    if (this._game == undefined) {
      if (this.hasSavedGame) {
        this.loadGame();
      } else {
        this.newGame();
      }
    }
    return this._game!;
  }

  constructor(private readonly localStorageService: LocalStorageService) { }

  abortArena() {

  }
  
  canAccessArena(arena: number): boolean {
    return arena < 12;
  }

  continueArena() {
  }

  loadGame() {
    this._game = Game.load(this.localStorageService.load(GameService.LOCAL_STORAGE_KEY));
  }

  newGame() {
    this._game = Game.newInstance();
    this.saveGame();
  }

  saveGame() {
    if (this._game != undefined) {
      this.localStorageService.save(GameService.LOCAL_STORAGE_KEY, this._game.save());
    }
  }

  startArena(arena: number) {
    this.game.startArena(arena);
  }
}
