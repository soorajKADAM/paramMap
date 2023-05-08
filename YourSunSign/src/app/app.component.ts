
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  options = {
    fpsLimit: 60,
    particles: {
      color: {
        value: '#000',
      },
      links: {
        enable: true,
        color: '#000',
      },
      move: {
        enable: true,
      },
    },
  };
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'sunsign',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/sunsign.svg'
      )
    );
  }
}
