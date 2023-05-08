import { Component } from '@angular/core';

@Component({
  selector: 'app-sunsign-home',
  template: `
  <div class="content">
  <div fxFlex="100%">
  <mat-card class="mat-elevation-z3">
  <mat-card-content>
  <div class="mat-caption" id="gdata">big card</div>
  </mat-card-content>
  </mat-card>
  </div>
  <div fxLayout="row" fxLayoutGap="16px grid">
  <div fxFlex="25%" *ngFor="let sunsign of sunsigns">
  <mat-card class="mat-elevation-z3">
  <mat-card-content>
<div class="mat-caption" id="gdata"  routerLink="/sunsigns/{{sunsign.name}}" 
routerLinkActive="active-link">{{sunsign.name}}</div>
<span class="material-symbols-outlined"> auto_awesome </span>
</mat-card-content>
</mat-card>
</div>
</div>
  </div>
  `,
  styles: [
    `.content{
      padding: 16px;
      }`,
    `.content > mat-card {
        width: 200px;
        }`,
    `.mat-caption {
          color: antiquewhite;
          }`,
    `.star{
            transform: scale(0.8);
            }`,
  ],
})
export class SunsignHomeComponent {
  sunsigns: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Aries',
    },
    {
      id: 2,
      name: 'Taurus',
    },
    {
      id: 3,
      name: 'Gemini',
    },
    {
      id: 4,
      name: 'Cancer',
    },
    {
      id: 5,
      name: 'Leo',
    },
    {
      id: 6,
      name: 'Virgo',
    },
    {
      id: 7,
      name: 'Libra',
    },
    {
      id: 8,
      name: 'Scorpio',
    },
    {
      id: 9,
      name: 'Sagittarius',
    },
    {
      id: 10,
      name: 'Capricorn',
    },
    {
      id: 11,
      name: 'Aquarius',
    },
    {
      id: 12,
      name: 'Pisces',
    },
  ];
  constructor() {}
}
