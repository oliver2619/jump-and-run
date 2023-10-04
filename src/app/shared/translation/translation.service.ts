import { Injectable } from '@angular/core';
import { DICTIONARY_DE } from './dictionary-de';
import { DICTIONARY_EN } from './dictionary-en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private dict: { [key: string]: string };

  constructor() {
    switch (this.getLanguage()) {
      case 'de':
        this.dict = DICTIONARY_DE;
        break;
      default:
        this.dict = DICTIONARY_EN;
    }
  }

  get(id: string): string {
    const ret = this.dict[id];
    if (ret == undefined) {
      console.warn(`No translation found for ${id}`);
      return id;
    } else {
      return ret;
    }
  }

  private getLanguage(): string {
    const regex = /^([^-]+)(-.*)?$/g;
    const result = regex.exec(navigator.language);
    if (result == null) {
      return 'en';
    }
    return result[1];
  }
}
