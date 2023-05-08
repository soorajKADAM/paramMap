import { Component } from '@angular/core';

@Component({
  selector: 'app-sunsign-home',
  templateUrl:'./sunsign-home.component.html',
  styleUrls: ['./sunsign-home.component.css'],
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
