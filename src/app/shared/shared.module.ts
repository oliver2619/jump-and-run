import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpValueComponent } from './count-up-value/count-up-value.component';
import { TranslationDirective } from './translation/translation.directive';
import { TranslationPipe } from './translation/translation.pipe';
import { MenuPageComponent } from './menu-page/menu-page.component';

@NgModule({
  declarations: [
    CountUpValueComponent,
    TranslationDirective,
    TranslationPipe,
    MenuPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountUpValueComponent,
    TranslationDirective,
    TranslationPipe,
    MenuPageComponent
  ]
})
export class SharedModule { }
