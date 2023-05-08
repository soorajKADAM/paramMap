import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../../YourSunSign/src/app/home/home.component';
import { AquariusComponent } from '../../../../YourSunSign/src/app/sunsigns/aquarius/aquarius.component';
import { AriesComponent } from '../../../../YourSunSign/src/app/sunsigns/aries/aries.component';
import { CancerComponent } from '../../../../YourSunSign/src/app/sunsigns/cancer/cancer.component';
import { CapricornComponent } from '../../../../YourSunSign/src/app/sunsigns/capricorn/capricorn.component';
import { GeminiComponent } from '../../../../YourSunSign/src/app/sunsigns/gemini/gemini.component';
import { LeoComponent } from '../../../../YourSunSign/src/app/sunsigns/leo/leo.component';
import { LibraComponent } from '../../../../YourSunSign/src/app/sunsigns/libra/libra.component';
import { PiscesComponent } from '../../../../YourSunSign/src/app/sunsigns/pisces/pisces.component';
import { SagittariusComponent } from '../../../../YourSunSign/src/app/sunsigns/sagittarius/sagittarius.component';
import { ScorpioComponent } from '../../../../YourSunSign/src/app/sunsigns/scorpio/scorpio.component';
import { SunsignHomeComponent } from '../../../../YourSunSign/src/app/sunsigns/sunsign-home/sunsign-home.component';
import { TaurusComponent } from '../../../../YourSunSign/src/app/sunsigns/taurus/taurus.component';
import { VirgoComponent } from '../../../../YourSunSign/src/app/sunsigns/virgo/virgo.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    children: [
      { path: '', redirectTo: '/sunsigns/home', pathMatch: 'full' },
      { path: 'home', component: SunsignHomeComponent },
      { path: 'Aries', component: AriesComponent },
      { path: 'Taurus', component: TaurusComponent },
      { path: 'Gemini', component: GeminiComponent },
      { path: 'Cancer', component: CancerComponent },
      { path: 'Leo', component: LeoComponent },
      { path: 'Virgo', component: VirgoComponent },
      { path: 'Libra', component: LibraComponent },
      { path: 'Scorpio', component: ScorpioComponent },
      { path: 'Sagittarius', component: SagittariusComponent },
      { path: 'Capricorn', component: CapricornComponent },
      { path: 'Aquarius', component: AquariusComponent },
      { path: 'Pisces', component: PiscesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunsignsRoutingModule { }
