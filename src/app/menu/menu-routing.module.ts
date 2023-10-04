import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsComponent } from './credits/credits.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MainComponent
}, {
  path: 'credits',
  component: CreditsComponent
}, {
  path: 'new',
  component: NewComponent
}, {
  path: 'settings',
  component: SettingsComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
