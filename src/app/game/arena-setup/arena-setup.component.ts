import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/game.service';
import { TranslationService } from 'src/app/shared/translation/translation.service';

@Component({
  selector: 'jr-arena-setup',
  templateUrl: './arena-setup.component.html',
  styleUrls: ['./arena-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArenaSetupComponent implements OnDestroy {

  closeAction: (() => void) | undefined;

  private readonly subscription: Subscription;
  private arena = 0;

  get title(): string {
    return this.translationService.get(`arena.name.${this.arena}`);
  }

  constructor(
    private readonly router: Router,
    private readonly gameService: GameService,
    private readonly translationService: TranslationService,
    route: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.subscription = route.params.subscribe({
      next: value => {
        this.arena = Number(value['arena']);
        changeDetectorRef.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBack() {
    this.closeAction = () => this.router.navigateByUrl('/game');
  }

  onStart() {
    this.closeAction = () => {
      this.gameService.startArena(this.arena);
      this.router.navigateByUrl('/game/arena');
    };
  }
}
