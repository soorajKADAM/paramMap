import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="bubble" fxLayoutAlign="center center">
<span style="--i:15"></span>
<span style="--i:21"></span>
<span style="--i:23"></span>
<span style="--i:21"></span>
<span style="--i:19"></span>
<span style="--i:26"></span>
<span style="--i:24"></span>
<span style="--i:12"></span>
<span style="--i:14"></span>
<span style="--i:17"></span>
  </div>
  <div fxLayoutAlign="center center" style="height: 100%">
  <a><button class="button1" mat-raised-button color="primary" routerLink="/sunsigns">Sunsign Cards</button></a>

</div>
  `,
 styleUrls: ['./home.component.css']
})
export class HomeComponent {


}
