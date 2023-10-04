import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { MapComponent } from './map/map.component';
import { MonstersComponent } from './monsters/monsters.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { ArenaSetupComponent } from './arena-setup/arena-setup.component';
import { ArenaComponent } from './arena/arena.component';
import { SequenceComponent } from './sequence/sequence.component';
import { ArenaCompletionComponent } from './arena-completion/arena-completion.component';
import { ArenaPauseMenuComponent } from './arena-pause-menu/arena-pause-menu.component';
import { ScoreComponent } from './score/score.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MapComponent,
    MonstersComponent,
    AvatarsComponent,
    ArenaSetupComponent,
    ArenaComponent,
    SequenceComponent,
    ArenaCompletionComponent,
    ArenaPauseMenuComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule
  ]
})
export class GameModule { }
