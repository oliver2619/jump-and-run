import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { SettingsComponent } from './settings/settings.component';
import { CreditsComponent } from './credits/credits.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    NewComponent,
    SettingsComponent,
    CreditsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
