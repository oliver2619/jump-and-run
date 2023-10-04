import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private static readonly PREFIX = 'jump-n-run:';

  constructor() { }

  hasElement(key: string): boolean {
    return localStorage.getItem(this.getFinalKey(key)) != null;
  }

  load<T>(key: string): T {
    const finalKey = this.getFinalKey(key);
    const ret = localStorage.getItem(finalKey);
    if (ret == null) {
      throw new Error(`Failed to load ${finalKey} from local storage`);
    }
    return JSON.parse(ret);
  }

  save<T>(key: string, value: T) {
    localStorage.setItem(this.getFinalKey(key), JSON.stringify(value));
  }

  private getFinalKey(key: string) {
    return `${LocalStorageService.PREFIX}${key}`;
  }
}
