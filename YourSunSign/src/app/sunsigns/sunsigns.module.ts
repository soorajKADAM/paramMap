import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SunsignsRoutingModule } from './sunsigns-routing.module';
import { AriesComponent } from './aries/aries.component';
import { TaurusComponent } from './taurus/taurus.component';
import { GeminiComponent } from './gemini/gemini.component';
import { CancerComponent } from './cancer/cancer.component';
import { LeoComponent } from './leo/leo.component';
import { VirgoComponent } from './virgo/virgo.component';
import { LibraComponent } from './libra/libra.component';
import { ScorpioComponent } from './scorpio/scorpio.component';
import { SagittariusComponent } from './sagittarius/sagittarius.component';
import { CapricornComponent } from './capricorn/capricorn.component';
import { AquariusComponent } from './aquarius/aquarius.component';
import { PiscesComponent } from './pisces/pisces.component';
import { SunsignHomeComponent } from './sunsign-home/sunsign-home.component';
import { MaterialModule } from '../../../../YourSunSign/src/app/material.module';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AriesComponent,
    TaurusComponent,
    GeminiComponent,
    CancerComponent,
    LeoComponent,
    VirgoComponent,
    LibraComponent,
    ScorpioComponent,
    SagittariusComponent,
    CapricornComponent,
    AquariusComponent,
    PiscesComponent,
    SunsignHomeComponent,
  ],
  imports: [CommonModule, SunsignsRoutingModule, MaterialModule, MatCardModule],
})
export class SunsignsModule {}
