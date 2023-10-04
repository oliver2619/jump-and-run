import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslationService } from './translation.service';

@Directive({
  selector: '[jrTranslation]'
})
export class TranslationDirective implements OnChanges {

  @Input('jrTranslation')
  id: string = '';

  constructor(private readonly element: ElementRef<HTMLElement>, private readonly translationService: TranslationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] != undefined) {
      this.element.nativeElement.innerText = this.translationService.get(this.id);
    }
  }
}
