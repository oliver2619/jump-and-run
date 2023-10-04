import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { arenaGuard } from '../arena.guard';
import { ArenaCompletionComponent } from './arena-completion/arena-completion.component';
import { ArenaPauseMenuComponent } from './arena-pause-menu/arena-pause-menu.component';
import { ArenaSetupComponent } from './arena-setup/arena-setup.component';
import { ArenaComponent } from './arena/arena.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { MapComponent } from './map/map.component';
import { MonstersComponent } from './monsters/monsters.component';
import { ScoreComponent } from './score/score.component';
import { SequenceComponent } from './sequence/sequence.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MapComponent
}, {
  path: 'arena',
  component: ArenaComponent,
  children: [{
    path: 'completed',
    component: ArenaCompletionComponent
  }, {
    path: 'pause',
    component: ArenaPauseMenuComponent
  }]
}, {
  path: 'arena-setup/:arena',
  component: ArenaSetupComponent,
  canActivate: [arenaGuard]
}, {
  path: 'avatars',
  component: AvatarsComponent
}, {
  path: 'score',
  component: ScoreComponent
}, {
  path: 'monsters',
  component: MonstersComponent
}, {
  path: 'sequence',
  component: SequenceComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
