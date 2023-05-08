import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public currentParam: any;
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
    private _actRoute: ActivatedRoute
  ) {
    iconRegistry.addSvgIcon(
      'sunsign',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/sunsign.svg'
      )
    );
    this._actRoute.paramMap.subscribe((paramResponse) => {
      console.log(paramResponse);
      this.currentParam = paramResponse.get('id');
    });
  }
}
