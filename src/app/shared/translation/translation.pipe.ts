import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {

  constructor(private readonly translationService: TranslationService) { }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.translationService.get(String(value));
  }
}
