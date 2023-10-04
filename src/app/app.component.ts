import { Component, HostListener } from '@angular/core';
import packageJson from '../../package.json';

@Component({
  selector: 'jr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get version(): string {
    return packageJson.version;
  }

  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(ev: MouseEvent) {
    ev.preventDefault();

  }
}
